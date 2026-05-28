import { useState, useEffect, useCallback, useRef } from 'react';
import { toast } from 'sonner';

import { mastraClient } from '@/lib/mastraClient';
import { useThreadStore } from '@/stores/threadStore';
import { useTripStateStore } from '@/stores/tripStateStore';
import { AGENT_NAME, FETCH_TITLE_DELAY_MS, FETCH_TITLE_RETRY_MS } from '@/constants';
import { ERROR_MESSAGES } from '@/constants/messages';

export interface ThreadItem {
  id: string;
  title: string | null;
  createdAt: string;
}
type RawThread = { id: string; title?: string | null; createdAt?: string | Date };

const THREAD_RESOURCE_ID = AGENT_NAME;

// Converts Mastra's raw thread shape into a stable ThreadItem
const normalizeThread = (thread: RawThread): ThreadItem => ({
  id: thread.id,
  title: thread.title ?? null,
  createdAt:
    thread.createdAt instanceof Date
      ? thread.createdAt.toISOString()
      : (thread.createdAt ?? new Date().toISOString()),
});

export const useThreads = () => {
  const [threads, setThreads] = useState<ThreadItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  const { activeThreadId, isResumed, setActiveThreadId } = useThreadStore();

  const activeThreadIdRef = useRef(activeThreadId);
  activeThreadIdRef.current = activeThreadId;

  // Fetches threads from the server
  const fetchThreads = useCallback(async () => {
    setLoading(true);
    try {
      const response = await mastraClient.listMemoryThreads({
        resourceId: THREAD_RESOURCE_ID,
        agentId: AGENT_NAME,
      });
      const { threads: rawThreads = [] } = response as { threads?: RawThread[] };
      const normalizedThreads = rawThreads.map(normalizeThread);

      // Read directly from zustand to avoid stale ref during delete/switch races
      const currentThreadId = useThreadStore.getState().activeThreadId;

      // Only attempt to create the missing thread if we have a currentThreadId.
      const isCurrentThreadMissing =
        currentThreadId && !normalizedThreads.find((thread) => thread.id === currentThreadId);
      if (isCurrentThreadMissing) {
        await mastraClient.createMemoryThread({
          resourceId: THREAD_RESOURCE_ID,
          agentId: AGENT_NAME,
          threadId: currentThreadId,
        });
        normalizedThreads.unshift({
          id: currentThreadId,
          title: null,
          createdAt: new Date().toISOString(),
        });
      }

      normalizedThreads.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setThreads(normalizedThreads);
    } catch {
      // Threads are a convenience feature — do not surface errors to the user
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch of threads when the component mounts
  useEffect(() => {
    fetchThreads();
  }, []);

  const prevThreadIdRef = useRef<string | null>(null);

  // Re-fetch after switching to an existing thread to pick up its AI-generated title.
  // Skipped for new chats — no title exists yet and polling would be wasted.
  useEffect(() => {
    if (prevThreadIdRef.current === activeThreadId) return;
    prevThreadIdRef.current = activeThreadId;

    if (!isResumed) return;

    const firstRetry = setTimeout(fetchThreads, FETCH_TITLE_DELAY_MS);
    const secondRetry = setTimeout(fetchThreads, FETCH_TITLE_RETRY_MS);

    return () => {
      clearTimeout(firstRetry);
      clearTimeout(secondRetry);
    };
  }, [activeThreadId, isResumed, fetchThreads]);

  // Creates a new thread and sets it as the active thread.
  const createThread = useCallback(async () => {
    if (creating) return;
    setCreating(true);

    try {
      const createdThread = await mastraClient.createMemoryThread({
        resourceId: THREAD_RESOURCE_ID,
        agentId: AGENT_NAME,
      });
      const newThread = normalizeThread(createdThread as RawThread);

      setThreads((prev) => [newThread, ...prev]);
      setActiveThreadId(newThread.id, false);
    } catch {
      setActiveThreadId(crypto.randomUUID(), false);
    } finally {
      setCreating(false);
    }
  }, [creating, setActiveThreadId]);

  // Deletes a thread. If the deleted thread is currently active, switch to another thread or create a new one.
  const deleteThread = useCallback(
    async (threadId: string) => {
      try {
        await mastraClient.deleteThread(threadId, { agentId: AGENT_NAME });
        useTripStateStore.getState().clearTripState(threadId);

        setThreads((prev) => {
          const remainingThreads = prev.filter((thread) => thread.id !== threadId);

          if (threadId === activeThreadIdRef.current) {
            const nextThreadId =
              remainingThreads.length > 0 ? remainingThreads[0].id : crypto.randomUUID();
            const isResuming = remainingThreads.length > 0;
            setActiveThreadId(nextThreadId, isResuming);
          }

          return remainingThreads;
        });
      } catch {
        toast.error(ERROR_MESSAGES.DELETE_THREAD);
      }
    },
    [setActiveThreadId]
  );

  // Sets the specified thread as active. If the threadId does not exist, it will be created.
  const selectThread = useCallback(
    (threadId: string) => setActiveThreadId(threadId, true),
    [setActiveThreadId]
  );

  return {
    threads,
    loading,
    creating,
    activeThreadId,
    fetchThreads,
    createThread,
    deleteThread,
    selectThread,
  };
};

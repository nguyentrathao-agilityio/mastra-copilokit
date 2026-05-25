import { create } from 'zustand';
import { toast } from 'sonner';

// Constants
import { AGENT_NAME, ERROR_MESSAGES } from '@/constants';

// Utils
import { mastraClient } from '@/utils';

// Types
import type { Thread } from '@/types';

export type MastraThread = Thread;

interface ThreadStore {
  threads: MastraThread[];
  activeThreadId: string | null;
  isPendingNewChat: boolean;
  isLoading: boolean;
  startNewChat: () => void;
  selectThread: (id: string) => void;
  fetchThreads: () => Promise<void>;
  deleteThread: (id: string) => Promise<void>;
  renameThread: (id: string, newTitle: string) => Promise<void>;
  addPendingThread: (id: string) => void;
}

export const useThreadStore = create<ThreadStore>()((set, get) => ({
  threads: [],
  activeThreadId: null,
  isPendingNewChat: true,
  isLoading: false,

  startNewChat: () => set({ activeThreadId: null, isPendingNewChat: true }),

  selectThread: (id) => set({ activeThreadId: id, isPendingNewChat: false }),

  fetchThreads: async () => {
    set({ isLoading: true });
    try {
      const result = await mastraClient.listMemoryThreads({
        resourceId: AGENT_NAME,
        agentId: AGENT_NAME,
      });
      const sorted = (result.threads ?? [])
        .map((t) => ({ ...t, title: t.title ?? '' }))
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      set({ threads: sorted, isLoading: false });
    } catch {
      toast.error(ERROR_MESSAGES.LOAD_THREADS);
      set({ threads: [], isLoading: false });
    }
  },

  deleteThread: async (id) => {
    try {
      const thread = mastraClient.getMemoryThread({ threadId: id, agentId: AGENT_NAME });
      await thread.delete();
      const { threads, activeThreadId } = get();
      const filtered = threads.filter((t) => t.id !== id);
      const nextActiveId = activeThreadId === id ? (filtered[0]?.id ?? null) : activeThreadId;
      set({
        threads: filtered,
        activeThreadId: nextActiveId,
        isPendingNewChat: nextActiveId === null,
      });
    } catch {
      toast.error(ERROR_MESSAGES.DELETE_THREAD);
    }
  },

  renameThread: async (id, newTitle) => {
    try {
      const thread = mastraClient.getMemoryThread({ threadId: id, agentId: AGENT_NAME });
      await thread.update({ title: newTitle, resourceId: AGENT_NAME, metadata: {} });
      set((state) => ({
        threads: state.threads.map((t) => (t.id === id ? { ...t, title: newTitle } : t)),
      }));
    } catch {
      toast.error(ERROR_MESSAGES.RENAME_THREAD);
    }
  },

  addPendingThread: (id: string) => {
    set((s) => ({
      threads: [
        {
          id,
          title: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        ...s.threads,
      ],
      activeThreadId: id,
      isPendingNewChat: false,
    }));
  },
}));

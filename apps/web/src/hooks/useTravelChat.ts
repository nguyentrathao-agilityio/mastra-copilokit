import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

// Constants
import {
  AGENT_NAME,
  ALLOWED_CHAT_ROLES,
  CHAT_ROLE,
  ERROR_MESSAGES,
  FETCH_THREADS_DELAY_MS,
  FETCH_TITLE_DELAY_MS,
} from '@/constants';

// Stores
import { useThreadStore } from '@/stores';

// Utils
import { extractContent, mastraClient, RawMastraMessageSchema } from '@/utils';

// Types
import type { ChatMessage } from '@/types';

interface StreamTextDeltaChunk {
  type: 'text-delta';
  payload: { text: string };
}

type StreamChunk = StreamTextDeltaChunk | { type: string };

/**
 * Manages messages, streaming, and thread context for the travel agent chat.
 */
export const useTravelChat = () => {
  const { activeThreadId, isPendingNewChat, fetchThreads, selectThread, threads } =
    useThreadStore();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const skipNextLoad = useRef(false);

  const activeThreadTitle = threads.find((t) => t.id === activeThreadId)?.title ?? null;

  useEffect(() => {
    if (skipNextLoad.current) {
      skipNextLoad.current = false;
      return;
    }

    setMessages([]);
    if (!activeThreadId || isPendingNewChat) return;

    // Load messages for the active thread from mastra
    const load = async () => {
      try {
        const thread = mastraClient.getMemoryThread({
          threadId: activeThreadId,
          agentId: AGENT_NAME,
        });

        // Fetch messages
        const result = await thread.listMessages();
        const mapped: ChatMessage[] = [];

        // Map Mastra messages to ChatMessage format, filtering out unsupported roles and invalid messages
        for (const raw of result.messages as unknown[]) {
          const parsed = RawMastraMessageSchema.safeParse(raw);

          if (!parsed.success) {
            continue;
          }

          // Only include messages with allowed roles
          const m = parsed.data;
          if (!(ALLOWED_CHAT_ROLES as readonly string[]).includes(m.role)) {
            continue;
          }

          mapped.push({
            id: m.id,
            role: m.role as ChatMessage['role'],
            content: extractContent(m.content),
            createdAt: m.createdAt ? new Date(m.createdAt) : new Date(),
          });
        }
        setMessages(mapped);
      } catch {
        toast.error(ERROR_MESSAGES.LOAD_MESSAGES);
        setMessages([]);
      }
    };

    load();
  }, [activeThreadId]);

  const handleSend = useCallback(
    async (content: string) => {
      if (isStreaming) return;

      // Optimistically add the user's message to the chat interface
      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: CHAT_ROLE.USER,
        content,
        createdAt: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsStreaming(true);

      const assistantId = crypto.randomUUID();
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: CHAT_ROLE.ASSISTANT, content: '', createdAt: new Date() },
      ]);

      const resolvedThreadId = activeThreadId ?? crypto.randomUUID();
      const isNewChat = !activeThreadId;

      try {
        // Start streaming response from the agent, associating it with the current thread (creating a new one if needed)
        const agent = mastraClient.getAgent(AGENT_NAME);
        const response = await agent.stream(content, {
          memory: { thread: resolvedThreadId, resource: AGENT_NAME },
        });

        // Update the assistant's message content as new chunks arrive, and handle completion of the stream
        await response.processDataStream({
          onChunk: async (chunk: StreamChunk) => {
            // For text delta chunks, append the new text to the assistant's message content
            if (chunk.type === 'text-delta') {
              const { payload } = chunk as StreamTextDeltaChunk;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: m.content + payload.text } : m
                )
              );
            }

            // When the stream finishes, if this was a new chat, select the newly
            // created thread and refresh the thread list after a short delay to show the new thread and its title
            if (chunk.type === 'finish') {
              if (isNewChat) {
                skipNextLoad.current = true;
                selectThread(resolvedThreadId);
                setTimeout(fetchThreads, FETCH_TITLE_DELAY_MS);
              }
              setTimeout(fetchThreads, FETCH_THREADS_DELAY_MS);
            }
          },
        });
      } catch {
        toast.error(ERROR_MESSAGES.STREAM);
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, content: ERROR_MESSAGES.STREAM } : m))
        );
      } finally {
        setIsStreaming(false);
      }
    },
    [isStreaming, activeThreadId, fetchThreads, selectThread]
  );

  const isLoading = !!activeThreadId && !activeThreadTitle;

  return { messages, isStreaming, activeThreadTitle, isLoading, handleSend };
};

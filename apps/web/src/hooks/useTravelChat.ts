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
  FETCH_TITLE_RETRY_MS,
  TOOLS,
} from '@/constants';

// Schemas
import { RawMastraMessageSchema } from '@/schemas';

// Stores
import { useThreadStore } from '@/stores';

// Utils
import { extractContent, extractToolResult, mastraClient } from '@/utils';

// Types
import type { ChatMessage, ToolResultChunk } from '@/types';

interface StreamTextDeltaChunk {
  type: 'text-delta';
  payload: { text: string };
}

type StreamChunk = StreamTextDeltaChunk | ToolResultChunk | { type: string };

export const useTravelChat = () => {
  const {
    activeThreadId,
    isPendingNewChat,
    fetchThreads,
    selectThread,
    addPendingThread,
    threads,
  } = useThreadStore();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const skipNextLoad = useRef(false);
  const hasToolResultRef = useRef(false);
  const flightArgsRef = useRef<{
    origin: string;
    destination: string;
    departureDate: string;
  } | null>(null);

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
      setIsLoadingMessages(true);
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
          if (!parsed.success) continue;

          // Only include messages with allowed roles
          const m = parsed.data;
          if (!(ALLOWED_CHAT_ROLES as readonly string[]).includes(m.role)) continue;

          const toolResult = extractToolResult(m.content);

          mapped.push({
            id: m.id,
            role: m.role as ChatMessage['role'],
            content: toolResult ? '' : extractContent(m.content),
            createdAt: m.createdAt ? new Date(m.createdAt) : new Date(),
            toolResult,
          });
        }

        setMessages(mapped);
      } catch {
        toast.error(ERROR_MESSAGES.LOAD_MESSAGES);
        setMessages([]);
      } finally {
        setIsLoadingMessages(false);
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

      // Reset per-message refs
      hasToolResultRef.current = false;
      flightArgsRef.current = null;

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
            if (chunk.type === 'tool-result') {
              const { payload } = chunk as ToolResultChunk;
              if (payload.toolName === TOOLS.WEATHER) {
                hasToolResultRef.current = true;
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId
                      ? {
                          ...m,
                          content: '',
                          toolResult: {
                            toolName: TOOLS.WEATHER,
                            result: payload.result,
                          },
                        }
                      : m
                  )
                );
              }

              if (payload.toolName === TOOLS.FLIGHT) {
                hasToolResultRef.current = true;
                const args = flightArgsRef.current ?? {
                  origin: '',
                  destination: '',
                  departureDate: '',
                };
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId
                      ? {
                          ...m,
                          content: '',
                          toolResult: {
                            toolName: TOOLS.FLIGHT,
                            result: payload.result,
                            args,
                          },
                        }
                      : m
                  )
                );
              }
            }

            if (chunk.type === 'text-delta') {
              if (hasToolResultRef.current) return;
              const { payload } = chunk as StreamTextDeltaChunk;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: m.content + payload.text } : m
                )
              );
            }

            if (chunk.type === 'finish') {
              if (isNewChat) {
                skipNextLoad.current = true;
                addPendingThread(resolvedThreadId);
                setTimeout(fetchThreads, FETCH_TITLE_DELAY_MS); // first try 1 — 4s
                setTimeout(fetchThreads, FETCH_TITLE_RETRY_MS); // second try 2 — 8s
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
    [isStreaming, activeThreadId, fetchThreads, selectThread, addPendingThread]
  );

  // true when loading messages or there's an active thread without a title
  const isLoading =
    isLoadingMessages || (!!activeThreadId && !activeThreadTitle && !isPendingNewChat);

  return { messages, isStreaming, activeThreadTitle, isLoading, handleSend };
};

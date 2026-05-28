import { useEffect, useRef } from 'react';
import { useCopilotChatHeadless_c } from '@copilotkit/react-core';
import { toast } from 'sonner';

import { mastraClient } from '@/lib/mastraClient';
import { AGENT_NAME } from '@/constants';

type MastraContentPart = { type: string; text?: string };
type MastraMessageContent = { parts?: MastraContentPart[]; content?: string };
type MastraRawMessage = { id: string; role: string; content: unknown };
type AgUiMessage = { id: string; role: 'user' | 'assistant'; content: string };

const extractText = (content: unknown): string => {
  if (!content) return '';

  const mastraContent = content as MastraMessageContent;

  const textFromParts = mastraContent.parts
    ?.filter((part) => part.type === 'text' && part.text)
    .map((part) => part.text!)
    .join('');

  if (textFromParts) return textFromParts;
  if (typeof mastraContent.content === 'string') return mastraContent.content;
  if (typeof content === 'string') return content;

  return '';
};

const toAgUiMessage = (raw: MastraRawMessage): AgUiMessage => ({
  id: raw.id,
  role: raw.role as AgUiMessage['role'],
  content: extractText(raw.content),
});

const isVisibleMessage = (message: AgUiMessage): boolean =>
  (message.role === 'user' || message.role === 'assistant') && message.content.trim().length > 0;

export const useInjectThreadHistory = (threadId: string, isResumed: boolean): void => {
  const { setMessages } = useCopilotChatHeadless_c();
  const lastInjectedThreadIdRef = useRef<string | null>(null);

  useEffect(() => {
    // New chats have no history — skip the fetch entirely.
    if (!isResumed) return;

    if (lastInjectedThreadIdRef.current === threadId) return;

    // Guard against race conditions when threadId changes before the fetch resolves.
    let cancelled = false;

    mastraClient
      .listThreadMessages(threadId, { agentId: AGENT_NAME })
      .then((result) => {
        if (cancelled) return;

        const rawMessages = (result as { messages?: MastraRawMessage[] }).messages ?? [];
        const visibleMessages = rawMessages.map(toAgUiMessage).filter(isVisibleMessage);

        if (visibleMessages.length > 0) {
          setMessages(visibleMessages);
          lastInjectedThreadIdRef.current = threadId;
        }
      })
      .catch(() => {
        toast.error('Failed to load chat history. Please try again.');
      });

    return () => {
      cancelled = true;
    };
  }, [threadId, isResumed, setMessages]);
};

import { useState, useEffect } from 'react';

import { mastraClient } from '@/lib/mastraClient';
import { AGENT_NAME } from '@/constants';

export interface ThreadMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}
type MastraContentPart = { type: string; text?: string };
type MastraMessageContent = { parts?: MastraContentPart[]; content?: string };
type MastraRawMessage = { id: string; role: string; content: unknown };

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

const toThreadMessage = (raw: MastraRawMessage): ThreadMessage => ({
  id: raw.id,
  role: raw.role as ThreadMessage['role'],
  text: extractText(raw.content),
});

const isVisibleMessage = (message: ThreadMessage): boolean =>
  (message.role === 'user' || message.role === 'assistant') && message.text.trim().length > 0;

export interface UseThreadMessagesResult {
  messages: ThreadMessage[];
  loading: boolean;
}

/**
 * Fetches and parses the message history for a given Mastra thread.
 * Returns only user/assistant messages with non-empty text (tool messages are excluded).
 *
 * Resets and re-fetches automatically when `threadId` changes.
 */
export const useThreadMessages = (threadId: string | null): UseThreadMessagesResult => {
  const [messages, setMessages] = useState<ThreadMessage[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!threadId) {
      setMessages([]);
      return;
    }

    // Guard against race conditions when threadId changes before the fetch resolves.
    let cancelled = false;
    setLoading(true);

    mastraClient
      .listThreadMessages(threadId, { agentId: AGENT_NAME })
      .then((result) => {
        if (cancelled) return;

        const rawMessages = (result as { messages?: MastraRawMessage[] }).messages ?? [];
        const visibleMessages = rawMessages.map(toThreadMessage).filter(isVisibleMessage);

        setMessages(visibleMessages);
      })
      .catch(() => setMessages([]))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [threadId]);

  return { messages, loading };
};

import { useCopilotChatHeadless_c } from '@copilotkit/react-core';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

// Lib
import { mastraClient } from '@/lib';

// Constants
import { AGENT_NAME, CHAT_ROLE } from '@/constants';

// Utils
import { extractText, extractToolInvocations } from '@/utils';

// Types
import type { AgUiAssistantMessage, AgUiMessage, MastraRawMessage } from '@/types';

const toAgUiMessages = (raw: MastraRawMessage): AgUiMessage[] => {
  const out: AgUiMessage[] = [];

  if (raw.role === CHAT_ROLE.USER) {
    const text = extractText(raw.content);
    if (text.trim()) out.push({ id: raw.id, role: CHAT_ROLE.USER, content: text });
    return out;
  }

  if (raw.role === CHAT_ROLE.ASSISTANT) {
    const text = extractText(raw.content);
    const invocations = extractToolInvocations(raw.content);

    const toolCalls = invocations.length
      ? invocations.map((inv) => ({
          id: inv.toolCallId,
          type: 'function' as const,
          function: { name: inv.toolName, arguments: JSON.stringify(inv.args ?? {}) },
        }))
      : undefined;

    if (text.trim() || toolCalls) {
      const msg: AgUiAssistantMessage = { id: raw.id, role: CHAT_ROLE.ASSISTANT };
      if (text.trim()) msg.content = text;
      if (toolCalls) msg.toolCalls = toolCalls;
      out.push(msg);
    }

    for (const inv of invocations) {
      if (inv.state === 'result' && inv.result) {
        out.push({
          id: `tool-result::${inv.toolCallId}`,
          role: CHAT_ROLE.TOOL,
          toolCallId: inv.toolCallId,
          content: typeof inv.result === 'string' ? inv.result : JSON.stringify(inv.result),
        });
      }
    }
  }

  return out;
};

export const useInjectThreadHistory = (
  threadId: string,
  isResumed: boolean
): { isLoading: boolean; error: Error | null } => {
  const { setMessages } = useCopilotChatHeadless_c();
  const lastInjectedThreadIdRef = useRef<string | null>(null);
  const setMessagesRef = useRef(setMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useLayoutEffect(() => {
    setMessagesRef.current = setMessages;
  }, [setMessages]);

  useEffect(() => {
    if (!isResumed) return;
    if (lastInjectedThreadIdRef.current === threadId) return;

    lastInjectedThreadIdRef.current = threadId;
    let cancelled = false;
    setIsLoading(true);
    setError(null);

    mastraClient
      .listThreadMessages(threadId, { agentId: AGENT_NAME })
      .then((result) => {
        if (cancelled) return;

        const rawMessages = (result as { messages?: MastraRawMessage[] }).messages ?? [];
        const agUiMessages = rawMessages.flatMap(toAgUiMessages);

        if (agUiMessages.length) {
          setMessagesRef.current(agUiMessages);
        }
      })
      .catch((err: Error) => {
        if (cancelled) return;
        lastInjectedThreadIdRef.current = null;

        // Thread exists locally but not yet on the backend — no history to load.
        if (err.message?.toLowerCase().includes('thread not found')) return;

        setError(err);
        toast.error('Failed to load chat history. Please try again.');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [threadId, isResumed]);

  return { isLoading, error };
};

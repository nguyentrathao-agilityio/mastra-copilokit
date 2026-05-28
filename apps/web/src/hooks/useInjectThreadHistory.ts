import { useEffect, useRef } from 'react';
import { useCopilotChatHeadless_c } from '@copilotkit/react-core';
import { toast } from 'sonner';

import { mastraClient } from '@/lib/mastraClient';
import { AGENT_NAME, CHAT_ROLE } from '@/constants';

import type {
  MastraTextPart,
  MastraToolInvocationPart,
  MastraMessageContent,
  MastraRawMessage,
  AgUiAssistantMessage,
  AgUiMessage,
} from '@/types';

const extractText = (content: unknown): string => {
  const msgContent = content as MastraMessageContent;
  const fromParts = msgContent.parts
    ?.filter(
      (part): part is MastraTextPart => part.type === 'text' && !!(part as MastraTextPart).text
    )
    .map((part) => part.text)
    .join('');
  if (fromParts) return fromParts;
  if (typeof msgContent.content === 'string') return msgContent.content;
  if (typeof content === 'string') return content;

  return '';
};

const extractToolInvocations = (content: unknown): MastraToolInvocationPart['toolInvocation'][] => {
  const msgContent = content as MastraMessageContent;
  return (msgContent.parts ?? [])
    .filter((part): part is MastraToolInvocationPart => part.type === 'tool-invocation')
    .map((part) => part.toolInvocation);
};

/**
 * Converts a single Mastra message into one or more AG-UI messages.
 * Tool invocations expand into an AssistantMessage (with toolCalls) + a
 * ToolMessage per completed result so CopilotKit re-renders the action cards.
 */
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

    // One ToolMessage per completed invocation — carries the result CopilotKit renders
    for (const inv of invocations) {
      if (inv.state === 'result' && inv.result) {
        out.push({
          id: `${inv.toolCallId}-result`,
          role: CHAT_ROLE.TOOL,
          toolCallId: inv.toolCallId,
          content: JSON.stringify(inv.result),
        });
      }
    }
  }

  return out;
};

export const useInjectThreadHistory = (threadId: string, isResumed: boolean): void => {
  const { setMessages } = useCopilotChatHeadless_c();
  const lastInjectedThreadIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isResumed) return;
    if (lastInjectedThreadIdRef.current === threadId) return;

    let cancelled = false;

    mastraClient
      .listThreadMessages(threadId, { agentId: AGENT_NAME })
      .then((result) => {
        if (cancelled) return;

        const rawMessages = (result as { messages?: MastraRawMessage[] }).messages ?? [];
        const agUiMessages = rawMessages.flatMap(toAgUiMessages);

        if (agUiMessages?.length) {
          setMessages(agUiMessages);
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

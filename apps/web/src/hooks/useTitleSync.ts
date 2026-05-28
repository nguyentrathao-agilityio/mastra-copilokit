import { useEffect } from 'react';
import { useCopilotChatHeadless_c } from '@copilotkit/react-core';

import { useThreadStore } from '@/stores/threadStore';

const TITLE_MAX_LENGTH = 50;

type ContentPart = { type: string; text?: string };
type UserMessage = { role: 'user'; content: string | ContentPart[] };

const isUserMessage = (message: unknown): message is UserMessage =>
  typeof message === 'object' && message !== null && (message as UserMessage).role === 'user';

const extractText = (content: string | ContentPart[]): string => {
  if (typeof content === 'string') return content;
  return content.find((part) => part.type === 'text')?.text ?? '';
};

export const useTitleSync = () => {
  const { messages } = useCopilotChatHeadless_c();

  useEffect(() => {
    const { activeThreadId, threads, updateThread } = useThreadStore.getState();
    const activeThread = threads.find((thread) => thread.id === activeThreadId);

    if (activeThread?.title) return;

    const firstUserMessage = (messages as unknown[]).find(isUserMessage);
    if (!firstUserMessage) return;

    const text = extractText(firstUserMessage.content).trim();
    if (!text) return;

    const title = text.length > TITLE_MAX_LENGTH ? `${text.slice(0, TITLE_MAX_LENGTH)}…` : text;
    updateThread(activeThreadId, { title });
  }, [messages]);
};

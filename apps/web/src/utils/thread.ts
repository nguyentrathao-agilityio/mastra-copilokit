import { THREAD_PREVIEW_MAX_CHARS, THREAD_TITLE_MAX_WORDS } from '@/constants';

/**
 * Derives a thread title from the first user message (max N words).
 */
export const generateThreadTitle = (firstMessage: string): string => {
  const trimmed = firstMessage.trim();
  const words = trimmed.split(/\s+/);
  if (words.length <= THREAD_TITLE_MAX_WORDS) {
    return trimmed;
  }

  return `${words.slice(0, THREAD_TITLE_MAX_WORDS).join(' ')}...`;
};

/**
 * Truncates a message to a short preview string for the thread list.
 */
export const truncatePreview = (message: string): string => {
  const trimmed = message.trim();
  if (trimmed.length <= THREAD_PREVIEW_MAX_CHARS) {
    return trimmed;
  }

  return `${trimmed.slice(0, THREAD_PREVIEW_MAX_CHARS)}...`;
};

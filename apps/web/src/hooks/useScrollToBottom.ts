import { useEffect, useRef } from 'react';

const SCROLL_BOTTOM_THRESHOLD_PX = 80;

/**
 * Manages scroll-to-bottom behavior for a chat message list.
 * Auto-scrolls when history is first injected (wasEmpty) or when user is near the bottom.
 * Stays put if the user has scrolled up to read history.
 */
const useScrollToBottom = (messageCount: number) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevCountRef = useRef(messageCount);

  useEffect(() => {
    if (messageCount !== prevCountRef.current) {
      const wasEmpty = prevCountRef.current === 0;
      prevCountRef.current = messageCount;

      const el = scrollContainerRef.current;
      if (!el) return;

      const isNearBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight < SCROLL_BOTTOM_THRESHOLD_PX;

      if (wasEmpty || isNearBottom) {
        el.scrollTo({ top: el.scrollHeight, behavior: wasEmpty ? 'instant' : 'smooth' });
      }
    }
  }, [messageCount]);

  return { scrollContainerRef };
};

export { useScrollToBottom };

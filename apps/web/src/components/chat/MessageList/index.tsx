// components/chat/MessageList/index.tsx
import { useEffect, useRef, memo } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

import type { ChatMessage } from '@/types/travel';
import { MessageBubble } from '@/components/chat/MessageBubble';
import { TypingIndicator } from '@/components/chat/TypingIndicator';
import { Map } from 'lucide-react';

interface MessageListProps {
  messages: ChatMessage[];
  isStreaming?: boolean;
  /**
   * Render prop — return generative UI cards for a given assistant message.
   * Return null/undefined to render text-only.
   */
  renderGenerativeUI?: (message: ChatMessage) => ReactNode;
  className?: string;
}

/**
 * Scrollable list of chat messages. Auto-scrolls to bottom on new messages.
 * Pass renderGenerativeUI to inject cards below assistant bubbles.
 *
 * @example
 * <MessageList
 *   messages={messages}
 *   isStreaming={isStreaming}
 * />
 */
const MessageList = memo(({ messages, isStreaming = false, className }: MessageListProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, isStreaming]);

  return (
    <div
      role="log"
      aria-live="polite"
      aria-label="Conversation"
      className={cn('flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4', className)}
    >
      {messages.length === 0 && (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
          <Map size={40} className="text-text-tertiary" />
          <p className="text-heading text-text-primary font-medium">Plan your trip</p>
          <p className="text-body font-regular text-text-secondary">
            Tell me where you want to go and I will build a full itinerary.
          </p>
        </div>
      )}

      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {isStreaming && <TypingIndicator label="Planning your trip…" className="pl-10" />}

      <div ref={bottomRef} aria-hidden="true" />
    </div>
  );
});

MessageList.displayName = 'MessageList';

export { MessageList };
export type { MessageListProps };

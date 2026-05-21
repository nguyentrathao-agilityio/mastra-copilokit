// components/chat/MessageBubble/index.tsx
import { memo } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import type { ChatMessage } from '@/types/travel';
import { User } from 'lucide-react';

interface MessageBubbleProps {
  message: ChatMessage;
  className?: string;
}

/**
 * Single chat bubble — user (right-aligned) or assistant (left-aligned).
 * Pass generative UI cards as children; they render below the text.
 *
 * @example
 * <MessageBubble message={msg}>
 *   {msg.role === "assistant" && <WeatherCard data={weather} />}
 * </MessageBubble>
 */
const MessageBubble = memo(({ message, className }: MessageBubbleProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex w-full gap-3', isUser ? 'flex-row-reverse' : 'flex-row', className)}>
      {/* Avatar */}
      <div
        className={cn(
          'flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-medium',
          isUser
            ? 'bg-text-primary text-background-primary'
            : 'border-border-tertiary bg-background-secondary text-text-secondary border'
        )}
      >
        <User size={12} />
      </div>

      {/* Content */}
      <div className={cn('flex max-w-[80%] flex-col gap-2', isUser && 'items-end')}>
        {message.content && (
          <div
            className={cn(
              'text-body font-regular rounded-lg px-4 py-2.5 leading-relaxed',
              isUser
                ? 'bg-text-primary text-background-primary'
                : 'border-border-tertiary bg-background-primary text-text-primary border'
            )}
          >
            {message.content}
          </div>
        )}
        {message.renderGenerativeUI && <div className="w-full">{message.renderGenerativeUI()}</div>}
        <time
          className="text-meta font-regular text-text-tertiary"
          dateTime={message.createdAt.toISOString()}
        >
          {message.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </time>
      </div>
    </div>
  );
});

MessageBubble.displayName = 'MessageBubble';

export { MessageBubble };
export type { MessageBubbleProps };

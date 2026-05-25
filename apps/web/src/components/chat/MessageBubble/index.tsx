import { memo } from 'react';
import { User } from 'lucide-react';

// Constants
import { TOOLS } from '@/constants';

// Components
import { FlightCard, WeatherCard } from '@/components';

// Types
import type { ChatMessage } from '@/types';

// Utils
import { cn } from '@/utils';

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

        {message.toolResult?.toolName === TOOLS.WEATHER && (
          <WeatherCard data={message.toolResult.result} />
        )}

        {message.toolResult?.toolName === TOOLS.FLIGHT && (
          <FlightCard
            data={message.toolResult.result}
            origin={message.toolResult.args.origin}
            destination={message.toolResult.args.destination}
            departureDate={message.toolResult.args.departureDate}
          />
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

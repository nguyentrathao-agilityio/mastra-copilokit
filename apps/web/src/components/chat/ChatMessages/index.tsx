import { useCallback } from 'react';
import { type RefObject } from 'react';
import type { MessagesProps } from '@copilotkit/react-ui';
import { ChatEmptyState } from '../ChatEmptyState';
import { ChatHistoryLoading } from '../ChatHistoryLoading';
import { useScrollToBottom } from '@/hooks';

interface ChatMessagesProps extends MessagesProps {
  sendRef: RefObject<((text: string) => Promise<unknown>) | null>;
  isHistoryLoading?: boolean;
}

/**
 * Custom messages area for CopilotKit's `Messages` prop.
 * Shows the empty state when there are no messages, otherwise renders the message list.
 */
const ChatMessages = ({
  messages,
  inProgress,
  children,
  sendRef,
  isHistoryLoading = false,
  RenderMessage,
  ...restProps
}: ChatMessagesProps) => {
  const { scrollContainerRef } = useScrollToBottom(messages.length);

  const handleSuggestionClick = useCallback(
    (text: string) => {
      sendRef.current?.(text);
    },
    [sendRef]
  );

  return (
    <div ref={scrollContainerRef} className="scrollbar-thin flex-1 overflow-y-scroll px-4 py-4">
      {isHistoryLoading ? (
        <ChatHistoryLoading />
      ) : !messages?.length && !inProgress ? (
        <ChatEmptyState onSuggestionClick={handleSuggestionClick} />
      ) : (
        <>
          <div className="flex flex-col">
            {messages.map((message, index) => (
              <RenderMessage
                key={message.id ?? index}
                message={message}
                messages={messages}
                inProgress={inProgress}
                index={index}
                isCurrentMessage={index === messages.length - 1}
                {...restProps}
              />
            ))}
          </div>
          {children}
        </>
      )}
    </div>
  );
};

export { ChatMessages };

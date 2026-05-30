import { useRef, useEffect, useCallback } from 'react';
import { type RefObject } from 'react';
import type { MessagesProps } from '@copilotkit/react-ui';
import { useChatContext } from '@copilotkit/react-ui';
import { ChatEmptyState } from '../ChatEmptyState';
import { CHAT_ROLE } from '@/constants';

interface ChatMessagesProps extends MessagesProps {
  sendRef: RefObject<((text: string) => Promise<unknown>) | null>;
}

/**
 * Custom messages area for CopilotKit's `Messages` prop.
 * Shows the empty state when there are no messages, otherwise renders the message list.
 */
const ChatMessages = ({
  messages,
  inProgress,
  RenderMessage,
  AssistantMessage,
  UserMessage,
  ImageRenderer,
  onRegenerate,
  onCopy,
  onThumbsUp,
  onThumbsDown,
  messageFeedback,
  markdownTagRenderers,
  children,
  sendRef,
}: ChatMessagesProps) => {
  const { icons } = useChatContext();
  const scrollEndRef = useRef<HTMLDivElement>(null);
  const prevCountRef = useRef(messages.length);

  useEffect(() => {
    if (messages.length !== prevCountRef.current) {
      prevCountRef.current = messages.length;
      scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length]);

  const handleSuggestionClick = useCallback(
    (text: string) => {
      sendRef.current?.(text);
    },
    [sendRef]
  );

  return (
    <div className="scrollbar-thin flex-1 overflow-y-scroll px-4 py-4">
      {messages?.length && !inProgress ? (
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
                AssistantMessage={AssistantMessage}
                UserMessage={UserMessage}
                ImageRenderer={ImageRenderer}
                onRegenerate={onRegenerate}
                onCopy={onCopy}
                onThumbsUp={onThumbsUp}
                onThumbsDown={onThumbsDown}
                messageFeedback={messageFeedback}
                markdownTagRenderers={markdownTagRenderers}
              />
            ))}
          </div>
          {inProgress &&
            (messages[messages.length - 1]?.role === CHAT_ROLE.USER ||
              messages[messages.length - 1]?.role === CHAT_ROLE.TOOL) && (
              <span>{icons.activityIcon}</span>
            )}
          {children}
          <div ref={scrollEndRef} />
        </>
      )}
    </div>
  );
};

export { ChatMessages };

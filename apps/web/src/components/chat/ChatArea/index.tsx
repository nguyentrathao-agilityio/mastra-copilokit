// components/chat/ChatArea/index.tsx
import { useCallback } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { MessageList } from '@/components/chat/MessageList/index';
import { ChatInput } from '@/components/chat/ChatInput/index';
import type { ChatMessage } from '@/types/travel';

interface ChatAreaProps {
  messages: ChatMessage[];
  onSend: (message: string) => void;
  isStreaming?: boolean;
  className?: string;
}

/**
 * Full chat area: MessageList + ChatInput stacked.
 * This is the main content pane inside ChatLayout.
 *
 * @example
 * <ChatArea
 *   messages={messages}
 *   onSend={handleSend}
 *   isStreaming={isStreaming}
 * />
 */
const ChatArea = ({ messages, onSend, isStreaming = false, className }: ChatAreaProps) => {
  const handleSend = useCallback((text: string) => onSend(text), [onSend]);

  return (
    <div className={cn('flex h-full flex-1 flex-col overflow-hidden', className)}>
      <MessageList messages={messages} isStreaming={isStreaming} className="flex-1" />
      <ChatInput onSend={handleSend} isStreaming={isStreaming} />
    </div>
  );
};

export { ChatArea };
export type { ChatAreaProps };

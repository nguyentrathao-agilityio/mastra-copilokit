import { useState, useCallback, useRef, useEffect } from 'react';
import type { KeyboardEvent, ChangeEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import type { InputProps } from '@copilotkit/react-ui';
import { useCopilotChatInternal } from '@copilotkit/react-core';

// Stores
import { useSuggestionStore } from '@/stores';

// Utils
import { cn } from '@/utils';

// Components
import { Button } from '@/components';

// Constants
import { CHAT_ROLE } from '@/constants';

const ChatInputBar = ({ onSend, inProgress }: InputProps) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { messages } = useCopilotChatInternal();

  const setOnSend = useSuggestionStore((s) => s.setOnSend);

  // Keep the store's send function in sync with CopilotKit's onSend prop
  useEffect(() => {
    setOnSend(onSend);
  }, [onSend]);

  // Index of the most recent assistant message
  const lastAssistantIdx = messages.reduce(
    (lastIdx, msg, idx) => (msg.role === CHAT_ROLE.ASSISTANT ? idx : lastIdx),
    -1
  );
  // Cast to access toolCalls — only present on assistant messages
  const lastAssistantMsg =
    lastAssistantIdx !== -1 ? (messages[lastAssistantIdx] as { toolCalls?: unknown[] }) : undefined;
  // True when a tool-result message exists after the last assistant message
  const hasToolResultAfter = messages
    .slice(lastAssistantIdx + 1)
    .some((msg) => msg.role === CHAT_ROLE.TOOL);
  // Pending = last assistant called a tool but no result yet (waiting for human confirm)
  const isToolCallPending = Boolean(lastAssistantMsg?.toolCalls?.length) && !hasToolResultAfter;

  // Submit blocked while agent is running or waiting for HITL response.
  const submitDisabled = inProgress || isToolCallPending;

  const setLastTool = useSuggestionStore((s) => s.setLastTool);

  const handleSubmit = useCallback(async () => {
    const trimmed = value.trim();
    if (!trimmed || submitDisabled) return;

    setLastTool(null);
    setValue('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    await onSend(trimmed);
  }, [value, submitDisabled, onSend, setLastTool]);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  return (
    <div className="border-border-tertiary bg-background-primary border-t px-5 pb-5 pt-4">
      <div className="border-border-secondary bg-background-primary focus-within:border-brand-500 flex items-end gap-3 rounded-xl border-[1.5px] px-4 py-3 transition-colors">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything about your trip..."
          rows={1}
          aria-label="Chat message"
          className="text-body font-regular text-text-primary placeholder:text-text-tertiary flex-1 resize-none bg-transparent outline-none"
        />
        <Button
          onClick={handleSubmit}
          disabled={submitDisabled}
          aria-label="Send message"
          className={cn(
            'bg-brand-500 mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-opacity',
            submitDisabled && 'opacity-40'
          )}
          rightIcon={<ArrowRight size={16} className="text-white" />}
        />
      </div>
      <div className="flex justify-center">
        <p className="text-label text-text-tertiary mt-3">
          Travel AI can make mistakes. Always verify important information before booking.
        </p>
      </div>
    </div>
  );
};

export { ChatInputBar };

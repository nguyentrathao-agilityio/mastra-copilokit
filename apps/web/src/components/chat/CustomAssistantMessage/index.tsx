import { AssistantMessageProps, Markdown } from '@copilotkit/react-ui';
import { Bot, Copy, ThumbsUp, ThumbsDown, RotateCw } from 'lucide-react';
import { TypingIndicator } from '../TypingIndicator';
import { useState } from 'react';

const CopyButton = ({
  content,
  onCopyAction,
}: {
  content: string;
  onCopyAction?: (message: string) => void;
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    if (!content) return;
    try {
      setCopied(true);
      if (onCopyAction) onCopyAction(content);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore clipboard errors silently
    }
  };

  return (
    <button
      aria-label="Copy"
      title="Copy"
      onClick={handleClick}
      className="text-text-tertiary cursor-pointer"
    >
      {copied ? <span className="font-semibold text-green-500">✓</span> : <Copy size={16} />}
    </button>
  );
};

const CustomAssistantMessage = (props: AssistantMessageProps) => {
  const {
    message,
    isLoading,
    isCurrentMessage,
    markdownTagRenderers,
    onCopy,
    onRegenerate,
    onThumbsUp,
    onThumbsDown,
    feedback,
  } = props;

  const content = message?.content;
  const assistantUi = message?.generativeUI?.() ?? null;
  const assistantUiPosition = message?.generativeUIPosition ?? 'before';

  // Render nothing if there's no content, loading state, or generative UI
  const hasContent = Boolean(content || isLoading || assistantUi);
  if (!hasContent) return null;

  const renderBefore = Boolean(assistantUi && assistantUiPosition === 'before');
  const renderAfter = Boolean(assistantUi && assistantUiPosition !== 'before');

  return (
    <div className="flex max-w-[80%] gap-3 py-2">
      {/* Avatar */}
      {(content || isLoading) && (
        <div className="text-brand-500 bg-assistant-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
          <Bot size={18} />
        </div>
      )}

      {/* Content container */}
      <div className="flex flex-col gap-2">
        {/* Generative UI (before) */}
        {renderBefore && <div>{assistantUi}</div>}

        {/* Message bubble */}
        {(content || isLoading) && (
          <div
            className={`text-text-primary rounded-[28px] px-4 py-2 shadow ${
              isCurrentMessage ? 'ring-border-secondary ring-1' : ''
            }`}
          >
            {content ? (
              <Markdown content={content} components={markdownTagRenderers} />
            ) : (
              <TypingIndicator className="p-0" />
            )}
          </div>
        )}
        {/* Generative UI (after) */}
        {renderAfter && <div>{assistantUi}</div>}
        {/* Action buttons */}
        {content && (
          <div className="flex items-center gap-2 pl-5">
            <button
              aria-label="Regenerate"
              title="Regenerate"
              onClick={() => onRegenerate?.()}
              className="text-text-tertiary cursor-pointer"
            >
              <RotateCw size={16} />
            </button>

            <CopyButton
              content={typeof content === 'string' ? content : String(content)}
              onCopyAction={onCopy}
            />

            <button
              aria-label="Thumbs up"
              title="Thumbs up"
              onClick={() => onThumbsUp?.(message)}
              className={`cursor-pointer ${feedback === 'thumbsUp' ? 'text-brand-600' : 'text-text-tertiary'}`}
            >
              <ThumbsUp size={16} />
            </button>

            <button
              aria-label="Thumbs down"
              title="Thumbs down"
              onClick={() => onThumbsDown?.(message)}
              className={`cursor-pointer ${feedback === 'thumbsDown' ? 'text-red-500' : 'text-text-tertiary'}`}
            >
              <ThumbsDown size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { CustomAssistantMessage };

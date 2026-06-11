import { AssistantMessageProps, Markdown } from '@copilotkit/react-ui';
import { Bot, Copy, ThumbsUp, ThumbsDown, RotateCw } from 'lucide-react';
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
  const renderBefore = Boolean(assistantUi && assistantUiPosition === 'before');
  const renderAfter = Boolean(assistantUi && assistantUiPosition !== 'before');

  return (
    <div className="flex max-w-[80%] gap-3 py-2">
      <div className="text-brand-500 bg-assistant-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
        <Bot size={18} />
      </div>
      <div>
        {renderBefore ? <div>{assistantUi}</div> : null}

        {(content || isLoading) && (
          <div
            className={`border-border-tertiary text-text-primary rounded-[28px] border p-4 shadow ${
              isCurrentMessage ? 'ring-border-secondary ring-1' : ''
            }`}
          >
            {content ? (
              <Markdown content={content} components={markdownTagRenderers} />
            ) : isLoading ? (
              <div className="text-text-secondary flex items-center gap-2">
                <span className="typing-dot" />
                <span className="typing-dot delay-75" />
                <span className="typing-dot delay-150" />
              </div>
            ) : null}
          </div>
        )}
        {content && (
          <div className="mt-2 flex items-center gap-2 pl-5">
            <button
              aria-label="Regenerate"
              title="Regenerate"
              onClick={() => onRegenerate && onRegenerate()}
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
              onClick={() => onThumbsUp && message && onThumbsUp(message)}
              className={`cursor-pointer ${feedback === 'thumbsUp' ? 'text-brand-600' : 'text-text-tertiary'}`}
            >
              <ThumbsUp size={16} />
            </button>

            <button
              aria-label="Thumbs down"
              title="Thumbs down"
              onClick={() => onThumbsDown && message && onThumbsDown(message)}
              className={`cursor-pointer ${feedback === 'thumbsDown' ? 'text-red-500' : 'text-text-tertiary'}`}
            >
              <ThumbsDown size={16} />
            </button>
          </div>
        )}
        {renderAfter ? <div className="mt-2">{assistantUi}</div> : null}
      </div>
    </div>
  );
};

export { CustomAssistantMessage };

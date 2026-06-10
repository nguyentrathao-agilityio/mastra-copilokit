import { AssistantMessageProps, Markdown } from '@copilotkit/react-ui';
import { Bot } from 'lucide-react';

const CustomAssistantMessage = (props: AssistantMessageProps) => {
  const { message, isLoading, isCurrentMessage, markdownTagRenderers } = props;

  const content = message?.content;
  const assistantUi = message?.generativeUI?.() ?? null;
  const assistantUiPosition = message?.generativeUIPosition ?? 'after';
  const renderBefore = Boolean(assistantUi && assistantUiPosition === 'before');
  const renderAfter = Boolean(assistantUi && assistantUiPosition !== 'before');

  return (
    <div className="flex max-w-[50%] gap-3 py-2">
      <div className="text-brand-500 border-border-tertiary flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2">
        <Bot size={18} />
      </div>
      <div className="flex-1">
        {renderBefore ? <div className="mb-2">{assistantUi}</div> : null}

        <div
          className={`border-border-tertiary text-text-primary rounded-[28px] border p-4 ${
            isCurrentMessage ? 'shadow-sm' : 'shadow-xs'
          }`}
        >
          {content ? (
            <Markdown content={content} components={markdownTagRenderers} />
          ) : isLoading ? (
            <div className="text-text-secondary">Assistant is thinking…</div>
          ) : null}
        </div>

        {renderAfter ? <div className="mt-2">{assistantUi}</div> : null}
      </div>
    </div>
  );
};

export { CustomAssistantMessage };

import { UserMessageProps } from '@copilotkit/react-ui';

const CustomUserMessage = ({ message }: UserMessageProps) => {
  const content = typeof message?.content === 'string' ? message.content : '';

  return (
    <div className="flex justify-end py-2">
      <div className="bg-brand-500 text-icon-on-vivid max-w-[80%] rounded-2xl px-4 py-2">
        {content}
      </div>
    </div>
  );
};

export { CustomUserMessage };

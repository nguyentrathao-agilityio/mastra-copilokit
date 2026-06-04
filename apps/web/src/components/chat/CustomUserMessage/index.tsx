import { UserMessageProps } from '@copilotkit/react-ui';

const CustomUserMessage = ({ message }: UserMessageProps) => {
  const content = typeof message?.content === 'string' ? message.content : '';

  return (
    <div className="flex justify-end py-2">
      <div className="max-w-[80%] rounded-2xl bg-blue-500 px-4 py-2 text-white">{content}</div>
    </div>
  );
};

export { CustomUserMessage };

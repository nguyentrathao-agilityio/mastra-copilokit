import { UserMessageProps } from '@copilotkit/react-ui';
import { User } from 'lucide-react';

const CustomUserMessage = ({ message }: UserMessageProps) => {
  const content = typeof message?.content === 'string' ? message.content : '';

  return (
    <div className="flex justify-end py-2">
      <div className="flex max-w-[80%] items-end gap-2">
        <div className="bg-user-gradient text-user-bubble-text rounded-2xl px-4 py-2 shadow">
          {content}
        </div>
        <div className="bg-user-gradient flex h-8 w-8 items-center justify-center rounded-full text-white">
          <User size={16} />
        </div>
      </div>
    </div>
  );
};

export { CustomUserMessage };

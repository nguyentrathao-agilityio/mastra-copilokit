// components/chat/TravelChat.tsx
import { Plane } from 'lucide-react';
import '@copilotkit/react-ui/styles.css';
import { useWeatherAction, useFlightAction, useRouteAction } from '@/hooks';
import { CopilotChat, AssistantMessage as DefaultAssistantMessage } from '@copilotkit/react-ui';

export const TravelChat = () => {
  useWeatherAction();
  useFlightAction();
  useRouteAction();

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="border-border-secondary bg-background-primary flex items-center gap-2.5 border-b px-6 py-3">
        <Plane size={18} className="text-text-secondary" />
        <div className="flex flex-col gap-1">
          <h1 className="text-body text-text-primary font-medium">Travel assistant</h1>
          <p className="text-meta font-regular text-text-tertiary">
            Ask me anything about your trip
          </p>
        </div>
      </header>

      <CopilotChat
        className="flex-1 overflow-hidden"
        labels={{ placeholder: 'Ask me anything about your trip…' }}
        AssistantMessage={({ message, ...props }) => {
          const content = (message?.content as string) ?? '';
          const m = message as any;

          // Hide internal coagent state render
          if (m?.name === 'coagent-state-render') return null;

          // Hide raw JSON
          if (content.trim().startsWith('{') || content.trim().startsWith('[')) return null;

          // Hide assistant text that comes WITH a generativeUI (tool card) — đây là duplicate text
          if (m?.generativeUIPosition && content.trim().length > 0 && m?.toolCalls === undefined)
            return null;

          return <DefaultAssistantMessage message={message} {...props} />;
        }}
      />
    </div>
  );
};

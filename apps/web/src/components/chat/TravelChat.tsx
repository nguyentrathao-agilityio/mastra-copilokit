import { Plane } from 'lucide-react';
import { useTravelChat, useWeatherAction } from '@/hooks';
import { ChatArea } from '@/components/chat/ChatArea';

/**
 * Chat interface for the travel planning assistant.
 */
export const TravelChat = () => {
  useWeatherAction();
  const { messages, isStreaming, activeThreadTitle, isLoading, handleSend } = useTravelChat();

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="border-border-secondary bg-background-primary flex items-center justify-between border-b px-6 py-3">
        <div className="flex items-center gap-2.5">
          <Plane size={18} className="text-text-secondary" />
          <div className="flex flex-col gap-1">
            {isLoading ? (
              <>
                <div className="bg-border-secondary h-3 w-32 animate-pulse rounded" />
                <div className="bg-border-secondary h-2.5 w-24 animate-pulse rounded" />
              </>
            ) : (
              <>
                <h1 className="text-body text-text-primary font-medium">
                  {activeThreadTitle || 'Travel assistant'}
                </h1>
                <p className="text-meta font-regular text-text-tertiary">
                  Ask me anything about your trip
                </p>
              </>
            )}
          </div>
        </div>
      </header>

      <ChatArea messages={messages} onSend={handleSend} isStreaming={isStreaming} />
    </div>
  );
};

import { Plane } from 'lucide-react';
import { CopilotChat } from '@copilotkit/react-ui';

// Hooks
import { useWeatherAction, useRouteAction, useFlightAction } from '@/hooks';

/**
 * Chat interface for the travel planning assistant.
 * Uses CopilotKit's CopilotChat component with custom message renderers.
 */
export const TravelChat = () => {
  // Register tool renderers
  useWeatherAction();
  useRouteAction();
  useFlightAction();

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="border-border-secondary bg-background-primary flex items-center justify-between border-b px-6 py-3">
        <div className="flex items-center gap-2.5">
          <Plane size={18} className="text-text-secondary" />
          <div className="flex flex-col gap-1">
            <h1 className="text-body text-text-primary font-medium">Travel assistant</h1>
            <p className="text-meta font-regular text-text-tertiary">
              Ask me anything about your trip
            </p>
          </div>
        </div>
      </header>

      <CopilotChat
        className="h-full flex-1"
        instructions="You are a helpful travel planning assistant. Help users plan trips, suggest destinations, create itineraries, and provide travel tips."
        labels={{
          title: 'Travel Assistant',
          initial: "Hi! I'm your travel planning assistant. Where would you like to go?",
          placeholder: 'Ask about destinations, itineraries, tips...',
        }}
      />
    </div>
  );
};

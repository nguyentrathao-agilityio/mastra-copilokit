import { Plane } from 'lucide-react';
import '@copilotkit/react-ui/styles.css';
import { CopilotChat } from '@copilotkit/react-ui';

// Hooks
import {
  useWeatherAction,
  useRouteAction,
  useFlightAction,
  usePlacesAction,
  useLocalTipsAction,
  useHotelAction,
  useTravelActions,
  useProvideInfoFlight,
  useBookedActions,
  useItineraryAction,
  useItineraryFlowAction,
} from '@/hooks';

/**
 * Chat interface for the travel planning assistant.
 * Uses CopilotKit's CopilotChat component with custom message renderers.
 */
export const TravelChat = () => {
  useWeatherAction();
  useRouteAction();
  useHotelAction();
  usePlacesAction();
  useLocalTipsAction();

  // Flights
  useProvideInfoFlight();
  useFlightAction();

  useTravelActions();
  useBookedActions();
  useItineraryAction();
  useItineraryFlowAction();

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
      />
    </div>
  );
};

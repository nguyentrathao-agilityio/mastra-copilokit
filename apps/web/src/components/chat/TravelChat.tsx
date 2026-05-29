import { Plane } from 'lucide-react';
import '@copilotkit/react-ui/styles.css';
import { CopilotChat, AssistantMessage as DefaultAssistantMessage } from '@copilotkit/react-ui';
import type { AssistantMessageProps } from '@copilotkit/react-ui';

import { useShallow } from 'zustand/shallow';

import { useThreadStore } from '@/stores/threadStore';
import {
  useTitleSync,
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
  useProvideInfoHotel,
  useTripSummaryAction,
  useFlightSelectionGate,
  useHotelBookingGate,
  useInjectThreadHistory,
} from '@/hooks';

const TravelChatInner = () => {
  const { activeThreadId, isResumed } = useThreadStore(
    useShallow((state) => ({ activeThreadId: state.activeThreadId, isResumed: state.isResumed }))
  );

  useInjectThreadHistory(activeThreadId, isResumed);

  useWeatherAction();
  useRouteAction();
  useHotelAction();
  usePlacesAction();
  useLocalTipsAction();

  useProvideInfoFlight();
  useFlightAction();

  useTravelActions();
  useBookedActions();
  useItineraryAction();
  useProvideInfoHotel();
  useTripSummaryAction();

  useFlightSelectionGate();
  useHotelBookingGate();
  useTitleSync();

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="border-border-secondary bg-background-primary flex h-14 shrink-0 items-center gap-3 border-b px-5">
        <div className="bg-brand-500 flex h-8 w-8 items-center justify-center rounded-lg">
          <Plane size={15} className="text-white" />
        </div>
        <div>
          <h1 className="text-body text-text-primary font-semibold leading-none">
            Travel assistant
          </h1>
          <p className="text-label text-text-tertiary mt-0.5">Ask me anything about your trip</p>
        </div>
      </header>

      <CopilotChat
        className="flex-1 overflow-hidden"
        labels={{ placeholder: 'Ask me anything about your trip…' }}
        AssistantMessage={(props: AssistantMessageProps) => {
          const { message, messages } = props;

          if (message && messages) {
            const idx = messages.findIndex((m) => m.id === message.id);
            const prev = messages[idx - 1];

            if (prev?.role === 'tool' && message.content && !message.toolCalls?.length) {
              return null;
            }
          }

          return <DefaultAssistantMessage {...props} />;
        }}
      />
    </div>
  );
};

export const TravelChat = () => <TravelChatInner />;

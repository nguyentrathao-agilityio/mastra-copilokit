import { useCopilotAction } from '@copilotkit/react-core';

// Components
import { useTripState } from './useTripState';
import { LoadingCard } from '@/components/common';
import { FlightOptionItem } from '@/components/FlightCard/FlightOptionItem';

export const useBookedActions = () => {
  const { state } = useTripState();

  useCopilotAction({
    name: 'show-booked-flights',
    description: 'Display booked flights as a card when user asks about their selected flights.',
    parameters: [],
    handler: async () => 'Flights displayed',
    render: ({ status }) => {
      if (status === 'inProgress' || status === 'executing') return <LoadingCard lines={3} />;

      const departure = state.flights?.departure;
      const returnFlight = state.flights?.return;

      if (!departure && !returnFlight) return <></>;

      return (
        <div className="border-border-secondary flex w-full max-w-2xl flex-col overflow-hidden rounded-lg border">
          {departure && <FlightOptionItem flight={departure} isSelected={false} />}
          {returnFlight && (
            <>
              <div className="border-border-secondary border-t" />
              <FlightOptionItem flight={returnFlight} isSelected={false} />
            </>
          )}
        </div>
      );
    },
  });
};

import { useCopilotAction } from '@copilotkit/react-core';

// Components
import { useTripState } from './useTripState';
import { LoadingCard, FlightOptionItem, HotelOptionItem } from '@/components';

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

      if (!departure && !returnFlight) return <>You have not booked any flights yet.</>;

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

  useCopilotAction({
    name: 'show-booked-hotel',
    description: 'Display booked hotels as a card when user asks about their selected hotels.',
    parameters: [],
    handler: async () => 'Hotels displayed',
    render: ({ status }) => {
      if (status === 'inProgress' || status === 'executing') return <LoadingCard lines={3} />;

      const hotel = state.hotel;

      if (!hotel) return <>You have not booked any hotels yet.</>;

      return (
        <div className="border-border-secondary flex w-full max-w-2xl flex-col overflow-hidden rounded-lg border">
          <HotelOptionItem hotel={hotel} isSelected={false} />
        </div>
      );
    },
  });
};

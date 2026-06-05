import { useRenderToolCall } from '@copilotkit/react-core';
import { TOOL_NAMES } from '@/constants';

// Schemas
import { TripSummaryResultSchema } from '@repo/schemas';

// Hooks
import { useTripState } from './useTripState';

// Components
import { ToolLoading, TripSummaryCard } from '@/components';

// Utils
import { isToolPending } from '@/utils';

export const useTripSummaryAction = () => {
  const { state } = useTripState();

  useRenderToolCall({
    name: TOOL_NAMES.TRIP_SUMMARY,
    description: 'Render the unified trip summary card with all sections',
    parameters: [
      { name: 'destination', type: 'string', description: 'Destination city', required: true },
      { name: 'startDate', type: 'string', description: 'Start date YYYY-MM-DD', required: false },
      { name: 'endDate', type: 'string', description: 'End date YYYY-MM-DD', required: false },
      {
        name: 'travelers',
        type: 'number',
        description: 'Number of travelers',
        required: false,
      },
      {
        name: 'flightOrigin',
        type: 'string',
        description: 'IATA departure airport code',
        required: false,
      },
      {
        name: 'skipFlights',
        type: 'boolean',
        description: 'Skip flight search — user already has booked flights',
        required: false,
      },
      {
        name: 'skipHotel',
        type: 'boolean',
        description: 'Skip hotel search — user already has a booked hotel',
        required: false,
      },
      {
        name: 'bookedFlightPrice',
        type: 'number',
        description: 'Price per person of the already-booked flight, for cost estimate',
        required: false,
      },
      {
        name: 'bookedHotelPricePerNight',
        type: 'number',
        description: 'Price per night of the already-booked hotel, for cost estimate',
        required: false,
      },
    ],
    render: ({ result, status }) => {
      if (isToolPending(status))
        return <ToolLoading action="Generating" toolName="trip plan summary" />;

      const parsed = TripSummaryResultSchema.safeParse(result);
      if (!parsed.success) return <></>;

      return (
        <TripSummaryCard
          data={parsed.data}
          bookedFlight={state.flights}
          bookedHotel={state.hotel}
        />
      );
    },
  });
};

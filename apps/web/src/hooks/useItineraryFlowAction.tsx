import { useRenderToolCall } from '@copilotkit/react-core';

// Schemas
import { TripSummaryResultSchema } from '@repo/schemas';

// Hooks
import { useTripState } from './useTripState';

// Components
import { LoadingCard } from '@/components/common';
import { TripSummaryCard } from '@/components/TripSummaryCard';

/**
 * Renders the `trip-summary` tool result as a unified TripSummaryCard.
 * Replaces the old per-tool rendering (WeatherCard + RouteCard + ...).
 * Booked flights/hotel from local state are merged in automatically.
 */
export const useItineraryFlowAction = () => {
  const { state } = useTripState();

  useRenderToolCall({
    name: 'runItineraryTool',
    description: 'Render the full trip summary card',
    parameters: [
      { name: 'destination', type: 'string', description: 'Destination city', required: true },
      { name: 'startDate', type: 'string', description: 'Start date', required: false },
      { name: 'endDate', type: 'string', description: 'End date', required: false },
      { name: 'travelers', type: 'number', description: 'Number of travelers', required: false },
      {
        name: 'flightOrigin',
        type: 'string',
        description: 'IATA departure airport code',
        required: false,
      },
      { name: 'skipFlights', type: 'boolean', description: 'Skip flight search', required: false },
      { name: 'skipHotel', type: 'boolean', description: 'Skip hotel search', required: false },
    ],
    render: ({ result, status }) => {
      if (status !== 'complete') {
        return <LoadingCard lines={8} />;
      }

      const parsed = TripSummaryResultSchema.safeParse(result);
      if (!parsed.success) return <LoadingCard lines={8} />;

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

import { useHumanInTheLoop, useRenderToolCall } from '@copilotkit/react-core';
import { ACTIONS, TOOL_NAMES } from '@/constants';

// Schemas
import { TripSummaryResultSchema } from '@repo/schemas';

// Hooks
import { useTripState } from './useTripState';

// Components
import { ErrorCard, LoadingCard, TripSummaryCard, TripSummaryConfirmCard } from '@/components';

// Utils
import { isToolPending } from '@/utils';

export const useTripSummaryAction = () => {
  const { state } = useTripState();

  useHumanInTheLoop({
    name: ACTIONS.CONFIRM_TRIP_SUMMARY,
    description:
      'Ask the user to confirm before generating the full trip summary. Always call this before trip-summary.',
    parameters: [
      { name: 'destination', type: 'string', description: 'Destination city', required: false },
      { name: 'startDate', type: 'string', description: 'Start date YYYY-MM-DD', required: false },
      { name: 'endDate', type: 'string', description: 'End date YYYY-MM-DD', required: false },
      { name: 'travelers', type: 'number', description: 'Number of travelers', required: false },
    ],
    render: ({ args, respond }) => {
      if (!respond) return <></>;

      // Prefer agent-provided args, fall back to local state
      const destination = args?.destination ?? state.destination;
      const startDate = args?.startDate ?? state.startDate;
      const endDate = args?.endDate ?? state.endDate;
      const travelers = args?.travelers ?? state.travelers ?? 1;

      return (
        <TripSummaryConfirmCard
          destination={destination}
          startDate={startDate}
          endDate={endDate}
          travelers={travelers}
          hasBookedFlight={!!state.flights?.departure}
          hasBookedHotel={!!state.hotel}
          onConfirm={() => respond({ confirmed: true })}
          onCancel={() => respond({ confirmed: false })}
        />
      );
    },
  });

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
    ],
    render: ({ result, status }) => {
      if (isToolPending(status)) return <LoadingCard lines={10} />;

      const parsed = TripSummaryResultSchema.safeParse(result);
      if (!parsed.success) return <ErrorCard message={result?.error} />;

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

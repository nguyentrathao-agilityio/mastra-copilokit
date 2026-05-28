import { useHumanInTheLoop, useRenderToolCall } from '@copilotkit/react-core';

// Schemas
import { TripSummaryResultSchema } from '@repo/schemas';

// Hooks
import { useTripState } from './useTripState';

// Components
import { LoadingCard } from '@/components/common';
import { TripSummaryCard, TripSummaryConfirmCard } from '@/components/TripSummaryCard';

/**
 * Registers two CopilotKit actions for the trip summary flow:
 *
 * 1. `confirmTripSummary` — HITL confirmation card.
 *    Reads current TripState to show what's already booked.
 *    Responds with { confirmed: boolean }.
 *
 * 2. `trip-summary` (render) — renders the unified TripSummaryCard.
 *    Merges booked items from local state with tool result data.
 */
export const useTripSummaryAction = () => {
  const { state } = useTripState();

  // ── Step 1: Confirmation ────────────────────────────────────────────────

  useHumanInTheLoop({
    name: 'confirmTripSummary',
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

  // ── Step 2: Render summary ──────────────────────────────────────────────

  useRenderToolCall({
    name: 'tripSummaryTool',
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
      if (status !== 'complete') {
        return <LoadingCard lines={10} />;
      }

      const parsed = TripSummaryResultSchema.safeParse(result);
      if (!parsed.success) {
        console.error('[useTripSummaryAction] Schema parse failed:', parsed.error.flatten());
        return <LoadingCard lines={10} />;
      }

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

// Schema re-export for consumers that need the validated type
export { TripSummaryResultSchema as TripSummaryResultSchemaForAction };

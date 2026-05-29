import { useRenderToolCall } from '@copilotkit/react-core';

// Components
import { FlightCard, LoadingCard } from '@/components';

// Constants
import { FLIGHT_BASE_PARAMS } from '@/constants';

// Hooks
import { useTripState } from '@/hooks';

// Types
import type { Flight } from '@repo/types';

const FLIGHT_SEARCH_REQUIRED = ['origin', 'destination', 'departure_date'];

const searchParams = FLIGHT_BASE_PARAMS.map((p) => ({
  ...p,
  required: FLIGHT_SEARCH_REQUIRED.includes(p.name),
}));

export const useFlightAction = () => {
  const { selectFlight, state } = useTripState();

  useRenderToolCall({
    name: 'flightsTool',
    description: `Search available flights. Call this ONLY after collect-flight-info returns confirmed JSON data. Use the exact values from the JSON response.`,
    parameters: searchParams,
    render: ({ status, result, args }) => {
      if (status === 'inProgress' || status === 'executing') return <LoadingCard lines={5} />;

      const confirmedDeparture =
        result?.results?.find((flight: Flight) => flight.id === state?.flights?.departure?.id) ??
        null;
      const confirmedReturn =
        result?.returnResults?.find((flight: Flight) => flight.id === state?.flights?.return?.id) ??
        null;
      const isConfirmed = !!confirmedDeparture;

      return (
        <FlightCard
          data={result}
          {...args}
          onSelect={selectFlight}
          isConfirmed={isConfirmed}
          initialDeparture={confirmedDeparture}
          initialReturn={confirmedReturn}
        />
      );
    },
  });
};

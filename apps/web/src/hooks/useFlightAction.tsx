'use client';

import { useRenderToolCall } from '@copilotkit/react-core';

import { LoadingCard } from '@/components/common';
import FlightCard from '@/components/FlightCard';

/**
 * Registers a tool call renderer for the Mastra `search-flights` tool.
 * The tool is executed server-side by the Mastra agent; this hook only handles rendering.
 * Must be called inside a CopilotKit provider.
 */
export const useFlightAction = () => {
  useRenderToolCall({
    name: 'flightsTool',
    description: 'Search available flights between two airports on a given date',
    parameters: [
      {
        name: 'origin',
        type: 'string',
        description: 'IATA departure airport code',
        required: true,
      },
      {
        name: 'destination',
        type: 'string',
        description: 'IATA arrival airport code',
        required: true,
      },
      {
        name: 'departure_date',
        type: 'string',
        description: 'Departure date in YYYY-MM-DD format',
        required: true,
      },
      {
        name: 'adults',
        type: 'number',
        description: 'Number of adult passengers',
        required: false,
      },
      {
        name: 'return_date',
        type: 'string',
        description: 'Return date — enables round-trip',
        required: false,
      },
      {
        name: 'airline',
        type: 'string',
        description: 'Filter by IATA airline code',
        required: false,
      },
      {
        name: 'max_price',
        type: 'number',
        description: 'Max price per adult in USD',
        required: false,
      },
      { name: 'max_stops', type: 'number', description: 'Max number of stops', required: false },
      { name: 'sort', type: 'string', description: 'Sort order for results', required: false },
    ],
    render: ({ status, result, args }) => {
      if (status === 'inProgress' || status === 'executing') return <LoadingCard lines={5} />;

      return (
        <FlightCard
          data={result}
          origin={args.origin}
          destination={args.destination}
          departureDate={args.departure_date}
        />
      );
    },
  });
};

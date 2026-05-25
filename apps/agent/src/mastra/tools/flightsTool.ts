import { createTool } from '@mastra/core/tools';

// Services
import { searchFlights } from '@/services';

// Schemas
import { FlightInputSchema, FlightSearchResultSchema } from '@/schemas';

/**
 * Mastra tool — searches flights via external API.
 */
export const flightsTool = createTool({
  id: 'search-flights',
  description:
    'Search available flights between two airports on a given date. Supports round-trip, filtering by airline, max price, and max stops, and sort order.',
  inputSchema: FlightInputSchema,
  outputSchema: FlightSearchResultSchema,
  execute: async (input) => searchFlights(input),
});

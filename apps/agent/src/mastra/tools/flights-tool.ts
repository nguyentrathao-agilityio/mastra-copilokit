import { createTool } from '@mastra/core/tools';

// Services
import { searchFlights } from '@/services';

// Schemas
import { FlightInputSchema, FlightSearchResultSchema } from '@/schemas';

export const flightsTool = createTool({
  id: 'flightsTool',
  description: `Search available flights between two airports on a given date.
    IMPORTANT: Call this tool immediately when the user mentions flights, even if destination 
    or date is missing. The UI will collect missing information — do NOT ask follow-up 
    questions in chat before calling this tool.`,
  inputSchema: FlightInputSchema,
  outputSchema: FlightSearchResultSchema,
  execute: async (input) => {
    if (!input.origin || !input.destination || !input.departure_date) {
      throw new Error('Missing required fields after HITL');
    }

    return searchFlights(input);
  },
});

import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Services
import { searchFlights } from '@/services';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

// Schemas
import { FlightInputSchema, FlightSearchResultSchema, ToolErrorSchema } from '@/schemas';

// Utils
import { AppError } from '@/utils';

export const flightsTool = createTool({
  id: 'flightsTool',
  description: `Search available flights between two airports on a given date.
    IMPORTANT: Call this tool immediately when the user mentions flights, even if destination
    or date is missing. The UI will collect missing information — do NOT ask follow-up
    questions in chat before calling this tool.
    FULL_TRIP FLOW: After this tool returns, you MUST call waitForFlightSelection(mode="full-trip") next. Do NOT call search-hotels or any other tool until waitForFlightSelection responds.`,
  inputSchema: FlightInputSchema,
  outputSchema: FlightSearchResultSchema.or(ToolErrorSchema),
  execute: async (input) => {
    try {
      return await searchFlights(input);
    } catch (error) {
      return { error: error instanceof AppError ? error.message : TOOL_ERROR_MESSAGES.FLIGHTS };
    }
  },
});

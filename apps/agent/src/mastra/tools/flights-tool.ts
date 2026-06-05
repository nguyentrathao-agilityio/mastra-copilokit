import { createTool } from '@mastra/core/tools';

// Services
import { searchFlights } from '@/services';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

// Schemas
import { FlightInputSchema, FlightSearchResultSchema, ToolErrorSchema } from '@/schemas';

// Utils
import { AppError } from '@/utils';
import { TOOL_ERROR_OUTPUT, TOOL_NO_RESULTS_OUTPUT, TOOL_READY_OUTPUT } from '@/utils';

export const flightsTool = createTool({
  id: 'flightsTool',
  description: `Search available flights between two airports on a given date.
  Required: origin (airport code), destination (airport code), departure_date (YYYY-MM-DD).
  Optional: adults (defaults to 1 if not specified — do NOT ask the user for this).
  Only call this tool when required fields are available.
  When this tool returns, reply ONLY with the message field and ask the user to select flights from the search results. Do NOT ask follow-up questions.`,
  inputSchema: FlightInputSchema,
  outputSchema: FlightSearchResultSchema.or(ToolErrorSchema),
  execute: async (input) => {
    try {
      return await searchFlights(input);
    } catch (error) {
      return {
        error: error instanceof AppError ? error.message : TOOL_ERROR_MESSAGES.FLIGHTS,
      };
    }
  },
  toModelOutput: (output) => {
    if ('error' in output) return TOOL_ERROR_OUTPUT;
    if (output.count === 0) return TOOL_NO_RESULTS_OUTPUT;
    return TOOL_READY_OUTPUT;
  },
});

import { createTool } from '@mastra/core/tools';

// Services
import { searchHotels } from '@/services';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

// Schemas
import { HotelSearchResultSchema } from '@repo/schemas';
import { ToolErrorSchema } from '@/schemas';

// Utils
import { AppError } from '@/utils';
import { HotelInputSchema } from '@/schemas';

// Utils
import { TOOL_NO_RESULTS_OUTPUT, TOOL_READY_OUTPUT } from '@/utils';

export const hotelTool = createTool({
  id: 'search-hotels',
  description: `Search available hotels for a destination with flexible filters.
    Required: city, checkIn (YYYY-MM-DD), checkOut (YYYY-MM-DD).
    Only call this tool when all required fields are available.
    FULL_TRIP FLOW: Only call this tool after waitForFlightSelection has already responded with "confirm" or "skip". Never call this directly after flightsTool.`,
  inputSchema: HotelInputSchema,
  outputSchema: HotelSearchResultSchema.or(ToolErrorSchema),
  execute: async (inputData) => {
    try {
      return await searchHotels(inputData);
    } catch (error) {
      return {
        error: error instanceof AppError ? error.message : TOOL_ERROR_MESSAGES.HOTELS,
      };
    }
  },
  toModelOutput: (output) =>
    'error' in output || output.total === 0 ? TOOL_NO_RESULTS_OUTPUT : TOOL_READY_OUTPUT,
});

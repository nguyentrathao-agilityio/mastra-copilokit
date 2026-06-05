import { createTool } from '@mastra/core/tools';

// Services
import { searchHotels } from '@/services';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

// Schemas
import { HotelSearchResultSchema } from '@repo/schemas';
import { HotelInputSchema, ToolErrorSchema } from '@/schemas';

// Utils
import { AppError } from '@/utils';
import { TOOL_ERROR_OUTPUT, TOOL_NO_RESULTS_OUTPUT, TOOL_READY_OUTPUT } from '@/utils';

export const hotelTool = createTool({
  id: 'search-hotels',
  description: `Search available hotels for a destination with flexible filters.
    Required: city, checkIn (YYYY-MM-DD), checkOut (YYYY-MM-DD).
    Only call this tool when all required fields are available.
    When this tool returns, reply ONLY with the message field and ask the user to select hotels from the search results. Do NOT ask follow-up questions.`,
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
  toModelOutput: (output) => {
    if ('error' in output) return TOOL_ERROR_OUTPUT;
    if (output.total === 0) return TOOL_NO_RESULTS_OUTPUT;
    return TOOL_READY_OUTPUT;
  },
});

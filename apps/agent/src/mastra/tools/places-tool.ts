import { createTool } from '@mastra/core/tools';

// Services
import { getPlaces } from '@/services';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

// Utils
import { AppError } from '@/utils';

// Schemas
import { PlacesSearchResultSchema } from '@repo/schemas';
import { PlacesInputSchema, ToolErrorSchema } from '@/schemas';

export const placesTool = createTool({
  id: 'get-places',
  description:
    'Search places of interest in a city — attractions, restaurants, cafes, activities, nightlife, and shopping. Supports filtering by category and price level.',
  inputSchema: PlacesInputSchema,
  outputSchema: PlacesSearchResultSchema.or(ToolErrorSchema),
  execute: async (inputData) => {
    try {
      return await getPlaces(inputData);
    } catch (error) {
      return { error: error instanceof AppError ? error.message : TOOL_ERROR_MESSAGES.PLACES };
    }
  },
});

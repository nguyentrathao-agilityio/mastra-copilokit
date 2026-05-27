import { createTool } from '@mastra/core/tools';

// Services
import { getPlaces } from '@/services';

// Schemas
import { PlacesSearchResultSchema } from '@repo/schemas';
import { PlacesInputSchema } from '@/schemas';

export const placesTool = createTool({
  id: 'get-places',
  description:
    'Search places of interest in a city — attractions, restaurants, cafes, activities, nightlife, and shopping. Supports filtering by category and price level.',
  inputSchema: PlacesInputSchema,
  outputSchema: PlacesSearchResultSchema,
  execute: getPlaces,
});

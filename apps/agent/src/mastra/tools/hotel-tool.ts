import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Services
import { searchHotels } from '@/services';

// Schemas
import { HotelSearchResultSchema } from '@repo/schemas';

export const hotelTool = createTool({
  id: 'search-hotels',
  description: `Search available hotels for a destination with flexible filters.
    FULL_TRIP FLOW: Only call this tool after waitForFlightSelection has already responded with "confirm" or "skip". Never call this directly after flightsTool.`,
  inputSchema: z.object({
    city: z.string().describe('City name to search, e.g. "Da Nang" or "Bangkok"'),
    checkIn: z.string().describe('Check-in date in YYYY-MM-DD format'),
    checkOut: z.string().describe('Check-out date in YYYY-MM-DD format'),
    rooms: z.number().int().min(1).max(10).optional().default(1).describe('Number of rooms needed'),
    adults: z.number().int().min(1).max(20).optional().default(0).describe('Number of adults'),
    children: z.number().int().min(0).optional().default(0).describe('Number of children'),
    availableOnly: z.boolean().optional().default(false).describe('Only return available hotels'),
    minStars: z.number().int().min(1).max(5).optional().describe('Minimum star rating (1-5)'),
    maxPrice: z.number().positive().optional().describe('Maximum price per night in USD'),
    amenities: z
      .array(z.string())
      .optional()
      .describe('Required amenities (e.g. ["wifi", "pool", "breakfast"])'),
    limit: z
      .number()
      .int()
      .min(1)
      .max(100)
      .optional()
      .default(20)
      .describe('Maximum number of results to return'),
    offset: z.number().int().min(0).optional().default(0).describe('Pagination offset'),
  }),
  outputSchema: HotelSearchResultSchema,
  execute: async (inputData) => searchHotels(inputData),
});

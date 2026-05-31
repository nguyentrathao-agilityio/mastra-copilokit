import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Services
import { getRoute } from '@/services';

// Constants
import { DEFAULT_STOPS } from '@/constants';

// Schemas
import { RouteResultSchema } from '@repo/schemas';

export const routeTool = createTool({
  id: 'get-route',
  description:
    'Build a landmark tour itinerary for a city — ordered stops with travel times and transport modes',
  inputSchema: z.object({
    city: z.string().describe('City to build the tour for, e.g. "Da Nang" or "Hanoi"'),
    maxStops: z
      .number()
      .int()
      .min(2)
      .max(8)
      .optional()
      .default(DEFAULT_STOPS)
      .describe('Maximum number of stops (2-8), defaults to 5'),
  }),
  outputSchema: RouteResultSchema.nullable(),
  execute: async (inputData) => {
    try {
      return await getRoute(inputData);
    } catch {
      return null;
    }
  },
});

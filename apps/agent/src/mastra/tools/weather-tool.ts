import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Services
import { getWeather } from '@/services';

// Schemas
import { WeatherResultSchema } from '@repo/schemas';

export const weatherTool = createTool({
  id: 'get-weather',
  description: 'Get current weather conditions and forecast for a destination',
  inputSchema: z.object({
    city: z.string().describe('City name to look up, e.g. "Da Nang" or "Bangkok"'),
    days: z
      .number()
      .int()
      .min(1)
      .max(16)
      .optional()
      .describe('Number of forecast days (1-16), defaults to 5'),
  }),
  outputSchema: WeatherResultSchema,
  execute: async (inputData) => getWeather(inputData),
});

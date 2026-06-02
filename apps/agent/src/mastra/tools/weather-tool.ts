import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Services
import { getWeather } from '@/services';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

// Schemas
import { WeatherResultSchema } from '@repo/schemas';
import { ToolErrorSchema } from '@/schemas';

// Utils
import { AppError } from '@/utils';

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
  outputSchema: WeatherResultSchema.or(ToolErrorSchema),
  execute: async (inputData) => {
    try {
      return await getWeather(inputData);
    } catch (error) {
      return { error: error instanceof AppError ? error.message : TOOL_ERROR_MESSAGES.WEATHER };
    }
  },
});

import { createTool } from '@mastra/core/tools';

// Services
import { getWeather } from '@/services';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

// Schemas
import { WeatherResultSchema } from '@repo/schemas';
import { ToolErrorSchema } from '@/schemas';

// Utils
import { AppError } from '@/utils';
import { WeatherInputSchema } from '@/schemas';

// Utils
import { TOOL_READY_OUTPUT, TOOL_NO_RESULTS_OUTPUT } from '@/utils';

export const weatherTool = createTool({
  id: 'get-weather',
  description: `Get current weather conditions and forecast for a destination.
    Required: city. Optional: days (1-16, defaults to 5).
    Only call this tool when city is available.`,
  inputSchema: WeatherInputSchema,
  outputSchema: WeatherResultSchema.or(ToolErrorSchema),
  execute: async (inputData) => {
    try {
      return await getWeather(inputData);
    } catch (error) {
      return {
        error: error instanceof AppError ? error.message : TOOL_ERROR_MESSAGES.WEATHER,
      };
    }
  },
  toModelOutput: (output) =>
    'error' in output || (!output.travelTip && !output.current.description)
      ? TOOL_NO_RESULTS_OUTPUT
      : TOOL_READY_OUTPUT,
});

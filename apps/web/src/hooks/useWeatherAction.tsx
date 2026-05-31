import { useRenderToolCall } from '@copilotkit/react-core';

// Constants
import { TOOL_NAMES } from '@/constants';

// Utils
import { isToolPending } from '@/utils';

// Schemas
import { WeatherResultSchema } from '@repo/schemas';

// Components
import { WeatherCard, LoadingCard } from '@/components';

/**
 * Registers a tool call renderer for the Mastra `weatherTool` tool.
 * Shows a skeleton while the tool is in progress, then renders WeatherCard on completion.
 * Must be called inside a CopilotKit provider.
 */
export const useWeatherAction = () => {
  useRenderToolCall({
    name: TOOL_NAMES.WEATHER,
    description: 'Show current weather and forecast for a destination',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: true },
      { name: 'days', type: 'number', description: 'Number of forecast days', required: false },
    ],
    render: ({ status, result }) => {
      // If result is null, it means the tool call failed or returned no data, so we render nothing.
      if (result === null) return <></>;

      if (isToolPending(status)) return <LoadingCard lines={5} />;
      const parsed = WeatherResultSchema.safeParse(result);
      return <WeatherCard data={parsed.data} />;
    },
  });
};

import { useRenderToolCall } from '@copilotkit/react-core';

// Schemas
import { WeatherResultSchema } from '@repo/schemas';

// Components
import { LoadingCard, WeatherCard } from '@/components';

/**
 * Registers a tool call renderer for the Mastra `get-weather` tool.
 * Shows a skeleton while the tool is in progress, then renders WeatherCard on completion.
 * Must be called inside a CopilotKit provider.
 */
export const useWeatherAction = () => {
  useRenderToolCall({
    name: 'get-weather',
    description: 'Show current weather and forecast for a destination',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: true },
      { name: 'days', type: 'number', description: 'Number of forecast days', required: false },
    ],
    render: ({ status, result }) => {
      if (status === 'inProgress' || status === 'executing') {
        return <LoadingCard lines={5} />;
      }

      const parsed = WeatherResultSchema.safeParse(result);
      if (!parsed.success) return <LoadingCard lines={5} />;

      return <WeatherCard data={parsed.data} />;
    },
  });
};

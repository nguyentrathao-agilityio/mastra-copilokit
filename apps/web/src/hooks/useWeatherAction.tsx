import { useRenderToolCall } from '@copilotkit/react-core';

// Constants
import { TOOL_NAMES } from '@/constants';

// Utils
import { isToolPending } from '@/utils';

// Schemas
import { WeatherResultSchema } from '@repo/schemas';

// Components
import { WeatherCard, SuggestionChips, ToolLoading } from '@/components';

export const useWeatherAction = () => {
  useRenderToolCall({
    name: TOOL_NAMES.WEATHER,
    description: 'Show current weather and forecast for a destination',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: true },
      { name: 'days', type: 'number', description: 'Number of forecast days', required: false },
    ],
    render: ({ status, result }) => {
      if (isToolPending(status)) return <ToolLoading toolName="weather" />;

      const parsed = WeatherResultSchema.safeParse(result);
      if (!parsed.success) return <></>;

      return (
        <>
          <WeatherCard data={parsed.data} />
          <SuggestionChips toolName={TOOL_NAMES.WEATHER} />
        </>
      );
    },
  });
};

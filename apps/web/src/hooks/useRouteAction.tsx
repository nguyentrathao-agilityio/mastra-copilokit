import { useRenderToolCall } from '@copilotkit/react-core';

// Schemas
import { RouteResultSchema } from '@repo/schemas';

// Components
import { LoadingCard, RouteCard } from '@/components';

// Constants
import { ROUTE_LOADING_SKELETON_COUNT, TOOL_NAMES } from '@/constants';

// Utils
import { isToolPending } from '@/utils';

export const useRouteAction = () => {
  useRenderToolCall({
    name: TOOL_NAMES.ROUTE,
    description: 'Show a landmark tour route for a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: true },
      { name: 'maxStops', type: 'number', description: 'Max number of stops', required: false },
    ],
    render: ({ status, result }) => {
      if (isToolPending(status)) return <LoadingCard lines={ROUTE_LOADING_SKELETON_COUNT} />;

      const parsed = RouteResultSchema.safeParse(result);
      if (!parsed.success) return <></>;
      if (parsed.data.stops.length === 0) return <></>;

      return <RouteCard data={parsed.data} />;
    },
  });
};

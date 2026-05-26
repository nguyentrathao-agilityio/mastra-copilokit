import { useRenderToolCall } from '@copilotkit/react-core';

import { RouteResultSchema } from '@repo/schemas';
import { LoadingCard } from '@/components';
import RouteCard from '@/components/RouteCard';

export const useRouteAction = () => {
  useRenderToolCall({
    name: 'routeTool',
    description: 'Show a landmark tour route for a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: true },
      { name: 'maxStops', type: 'number', description: 'Max number of stops', required: false },
    ],
    render: ({ status, result }) => {
      if (status === 'inProgress' || status === 'executing') {
        return <LoadingCard lines={5} />;
      }

      const parsed = RouteResultSchema.safeParse(result);
      if (!parsed.success) return <LoadingCard lines={5} />;

      return <RouteCard data={parsed.data} />;
    },
  });
};

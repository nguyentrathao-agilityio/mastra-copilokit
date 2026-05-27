import { useHumanInTheLoop, useRenderToolCall } from '@copilotkit/react-core';

import { RouteResultSchema } from '@repo/schemas';
import { LoadingCard, ErrorCard } from '@/components';
import RouteCard from '@/components/RouteCard';
import { RouteConfirmCard } from '@/components/RouteCard/RouteConfirmCard';
import { ROUTE_LOADING_SKELETON_COUNT } from '@/constants';

export const useRouteAction = () => {
  useHumanInTheLoop({
    name: 'confirmRouteSearch',
    description: 'Plan a landmark tour route for a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: false },
      {
        name: 'maxStops',
        type: 'number',
        description: 'Max number of stops (2-8)',
        required: false,
      },
    ],
    render: ({ args, respond }) => {
      if (!respond) return <></>;

      return (
        <RouteConfirmCard
          city={args?.city ?? ''}
          maxStops={args?.maxStops ?? 5}
          onConfirm={(modified) => {
            respond({
              confirmed: true,
              city: modified.city,
              maxStops: modified.maxStops,
            });
          }}
          onCancel={() => respond({ confirmed: false })}
        />
      );
    },
  });

  useRenderToolCall({
    name: 'routeTool',
    description: 'Show a landmark tour route for a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: true },
      { name: 'maxStops', type: 'number', description: 'Max number of stops', required: false },
    ],
    render: ({ status, result }) => {
      if (status === 'inProgress' || status === 'executing') {
        return <LoadingCard lines={ROUTE_LOADING_SKELETON_COUNT} />;
      }

      const parsed = RouteResultSchema.safeParse(result);
      if (!parsed.success) return <ErrorCard />;

      return <RouteCard data={parsed.data} />;
    },
  });
};

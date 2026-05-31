import { useHumanInTheLoop, useRenderToolCall } from '@copilotkit/react-core';

// Schemas
import { RouteResultSchema } from '@repo/schemas';

// Components
import { ErrorCard, LoadingCard, RouteCard, RouteConfirmCard } from '@/components';

// Constants
import { ACTIONS, ROUTE_LOADING_SKELETON_COUNT, TOOL_NAMES } from '@/constants';

// Utils
import { isToolPending } from '@/utils';

export const useRouteAction = () => {
  useHumanInTheLoop({
    name: ACTIONS.CONFIRM_ROUTE_SEARCH,
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
            respond({ confirmed: true, city: modified.city, maxStops: modified.maxStops });
          }}
          onCancel={() => {
            respond({ confirmed: false });
          }}
        />
      );
    },
  });

  useRenderToolCall({
    name: TOOL_NAMES.ROUTE,
    description: 'Show a landmark tour route for a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: true },
      { name: 'maxStops', type: 'number', description: 'Max number of stops', required: false },
    ],
    render: ({ status, result }) => {
      // If result is null, it means the tool call failed or returned no data, so we render nothing.
      if (result === null) return <></>;

      if (isToolPending(status)) {
        return <LoadingCard lines={ROUTE_LOADING_SKELETON_COUNT} />;
      }

      const parsed = RouteResultSchema.safeParse(result);
      if (!parsed.success) return <ErrorCard />;

      return <RouteCard data={parsed.data} />;
    },
  });
};

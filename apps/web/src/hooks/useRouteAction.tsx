import { useRef } from 'react';
import { useHumanInTheLoop, useRenderToolCall } from '@copilotkit/react-core';

// Context
import { useApprovalRequest } from '@/hooks/useApprovalRequest';

import { RouteResultSchema } from '@repo/schemas';
import { LoadingCard, ErrorCard } from '@/components';
import RouteCard from '@/components/RouteCard';
import { RouteConfirmCard } from '@/components/RouteCard/RouteConfirmCard';
import { ROUTE_LOADING_SKELETON_COUNT } from '@/constants';

const ACTION_NAME = 'confirmRouteSearch';

export const useRouteAction = () => {
  const { savePending, clearPending } = useApprovalRequest();
  const savedRef = useRef(false);

  useHumanInTheLoop({
    name: ACTION_NAME,
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

      if (!savedRef.current) {
        savedRef.current = true;
        savePending(ACTION_NAME, args as Record<string, unknown>);
      }

      return (
        <RouteConfirmCard
          city={args?.city ?? ''}
          maxStops={args?.maxStops ?? 5}
          onConfirm={(modified) => {
            clearPending();
            respond({
              confirmed: true,
              city: modified.city,
              maxStops: modified.maxStops,
            });
          }}
          onCancel={() => {
            clearPending();
            respond({ confirmed: false });
          }}
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

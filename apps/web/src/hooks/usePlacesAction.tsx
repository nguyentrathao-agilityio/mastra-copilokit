import { useRef } from 'react';
import { useHumanInTheLoop, useRenderToolCall } from '@copilotkit/react-core';

// Context
import { useApprovalRequest } from '@/hooks/useApprovalRequest';

// Schemas
import { PlacesSearchResultSchema } from '@repo/schemas';

// Components
import { LoadingCard, PlacesCard } from '@/components';
import { PlacesConfirmCard } from '@/components/PlacesCard/PlacesConfirmCard';
import { ErrorCard } from '@/components';
import { PLACES_LOADING_SKELETON_COUNT } from '@/constants';

const ACTION_NAME = 'confirmPlacesSearch';

export const usePlacesAction = () => {
  const { savePending, clearPending } = useApprovalRequest();
  const savedRef = useRef(false);

  useHumanInTheLoop({
    name: ACTION_NAME,
    description: 'Search places of interest in a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: false },
      { name: 'category', type: 'string', description: 'Place category', required: false },
      { name: 'price_level', type: 'number', description: 'Price level 1-4', required: false },
    ],
    render: ({ args, respond }) => {
      if (!respond) return <></>;

      if (!savedRef.current) {
        savedRef.current = true;
        savePending(ACTION_NAME, args as Record<string, unknown>);
      }

      return (
        <PlacesConfirmCard
          city={args?.city ?? ''}
          category={args?.category ?? ''}
          priceLevel={args?.price_level ?? 1}
          onConfirm={(modified) => {
            clearPending();
            respond({
              confirmed: true,
              city: modified.city,
              category: modified.category,
              price_level: modified.priceLevel,
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
    name: 'placesTool',
    description: 'Search places of interest in a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: false },
      { name: 'category', type: 'string', description: 'Place category', required: false },
      { name: 'price_level', type: 'number', description: 'Price level 1-4', required: false },
    ],
    render: ({ result, status }) => {
      if (status !== 'complete') {
        return <LoadingCard lines={PLACES_LOADING_SKELETON_COUNT} />;
      }

      const parsed = PlacesSearchResultSchema.safeParse(result);

      if (!parsed.success) {
        return <ErrorCard />;
      }

      return <PlacesCard data={parsed.data} />;
    },
  });
};

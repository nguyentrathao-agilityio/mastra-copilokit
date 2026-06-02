import { useHumanInTheLoop, useRenderToolCall } from '@copilotkit/react-core';

// Schemas
import { PlacesSearchResultSchema } from '@repo/schemas';

// Components
import { LoadingCard, PlacesCard, PlacesConfirmCard, ErrorCard } from '@/components';

// Constants
import { ACTIONS, PLACES_LOADING_SKELETON_COUNT, TOOL_NAMES } from '@/constants';

// Utils
import { isToolPending } from '@/utils';

export const usePlacesAction = () => {
  useHumanInTheLoop({
    name: ACTIONS.CONFIRM_PLACES_SEARCH,
    description: 'Search places of interest in a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: false },
      { name: 'category', type: 'string', description: 'Place category', required: false },
      { name: 'price_level', type: 'number', description: 'Price level 1-4', required: false },
    ],
    render: ({ args, respond }) => {
      if (!respond) return <></>;

      return (
        <PlacesConfirmCard
          city={args?.city ?? ''}
          category={args?.category ?? ''}
          priceLevel={args?.price_level ?? 1}
          onConfirm={(modified) => {
            respond({
              confirmed: true,
              city: modified.city,
              category: modified.category,
              price_level: modified.priceLevel,
            });
          }}
          onCancel={() => {
            respond({ confirmed: false });
          }}
        />
      );
    },
  });

  useRenderToolCall({
    name: TOOL_NAMES.PLACES,
    description: 'Search places of interest in a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: false },
      { name: 'category', type: 'string', description: 'Place category', required: false },
      { name: 'price_level', type: 'number', description: 'Price level 1-4', required: false },
    ],
    render: ({ status, result }) => {
      if (isToolPending(status)) return <LoadingCard lines={PLACES_LOADING_SKELETON_COUNT} />;

      const parsed = PlacesSearchResultSchema.safeParse(result);

      if (!parsed.success) return <ErrorCard message={result?.error} />;

      return <PlacesCard data={parsed.data} />;
    },
  });
};

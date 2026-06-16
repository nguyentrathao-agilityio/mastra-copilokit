import { useRenderToolCall } from '@copilotkit/react-core';

// Schemas
import { PlacesSearchResultSchema } from '@repo/schemas';

// Components
import { PlacesCard, SetLastTool, ToolLoading, ToolComplete } from '@/components';

// Constants
import { TOOL_NAMES } from '@/constants';

// Utils
import { isToolPending } from '@/utils';

export const usePlacesAction = () => {
  useRenderToolCall({
    name: TOOL_NAMES.PLACES,
    description: 'Search places of interest in a city',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: false },
      { name: 'category', type: 'string', description: 'Place category', required: false },
      { name: 'price_level', type: 'number', description: 'Price level 1-4', required: false },
    ],
    render: ({ status, result }) => {
      if (isToolPending(status)) return <ToolLoading toolName="places" />;

      const parsed = PlacesSearchResultSchema.safeParse(result);

      if (!parsed.success) return <></>;
      if (parsed.data.total === 0) return <></>;

      return (
        <>
          <SetLastTool toolName={TOOL_NAMES.PLACES} />
          <ToolComplete action="searching for" toolName="places" />
          <PlacesCard data={parsed.data} />
        </>
      );
    },
  });
};

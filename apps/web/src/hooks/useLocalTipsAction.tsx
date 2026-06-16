import { useRenderToolCall } from '@copilotkit/react-core';

// Schemas
import { TipsResultSchema } from '@repo/schemas';

// Components
import { LocalTipsCard, SetLastTool, ToolLoading, ToolComplete } from '@/components';

// Constants
import { TOOL_NAMES } from '@/constants';

// Utils
import { isToolPending } from '@/utils';

export const useLocalTipsAction = () => {
  useRenderToolCall({
    name: TOOL_NAMES.LOCAL_TIPS,
    description: 'Get local travel tips for a city or country',
    parameters: [
      { name: 'city', type: 'string', description: 'City name', required: false },
      { name: 'country', type: 'string', description: 'Country name', required: false },
      { name: 'category', type: 'string', description: 'Tip category', required: false },
      {
        name: 'essential_only',
        type: 'boolean',
        description: 'Essential tips only',
        required: false,
      },
    ],
    render: ({ result, status }) => {
      if (isToolPending(status)) return <ToolLoading toolName="local tips" />;

      const parsed = TipsResultSchema.safeParse(result);
      if (!parsed.success) return <></>;
      if (parsed.data.count === 0) return <></>;

      return (
        <>
          <SetLastTool toolName={TOOL_NAMES.LOCAL_TIPS} />
          <ToolComplete action="getting" toolName="local tips" />
          <LocalTipsCard data={parsed.data} />
        </>
      );
    },
  });
};

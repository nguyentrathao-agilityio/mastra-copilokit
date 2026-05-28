import { useRef } from 'react';
import { useHumanInTheLoop, useRenderToolCall } from '@copilotkit/react-core';

// Context
import { useApprovalRequest } from '@/hooks/useApprovalRequest';

// Schemas
import { TipsResultSchema } from '@repo/schemas';

// Components
import LocalTipsCard from '@/components/LocalTipsCard';
import { LocalTipsConfirmCard } from '@/components/LocalTipsCard/LocalTipsConfirmCard';
import { ErrorCard } from '@/components';

const ACTION_NAME = 'confirmLocalTips';

export const useLocalTipsAction = () => {
  const { savePending, clearPending } = useApprovalRequest();
  const savedRef = useRef(false);

  useHumanInTheLoop({
    name: ACTION_NAME,
    description: 'Ask the user to confirm before fetching local tips for a city or country',
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
    render: ({ args, respond }) => {
      if (!respond) return <></>;

      if (!savedRef.current) {
        savedRef.current = true;
        savePending(ACTION_NAME, args as Record<string, unknown>);
      }

      return (
        <LocalTipsConfirmCard
          city={args?.city ?? ''}
          country={args?.country ?? ''}
          category={args?.category ?? ''}
          essentialOnly={args?.essential_only ?? false}
          onConfirm={(modified) => {
            clearPending();
            respond({ confirmed: true, ...modified });
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
    name: 'localTipsTool',
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
      if (status !== 'complete') {
        return <LocalTipsCard />;
      }

      const parsed = TipsResultSchema.safeParse(result);

      if (!parsed.success) {
        return <ErrorCard />;
      }

      return <LocalTipsCard data={parsed.data} />;
    },
  });
};

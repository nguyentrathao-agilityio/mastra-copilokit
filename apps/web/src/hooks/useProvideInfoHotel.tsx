import { useRef } from 'react';
import { useCopilotAction } from '@copilotkit/react-core';

// Components
import { LoadingCard, HotelContextForm } from '@/components';

// Constants
import { HOTEL_BASE_PARAMS, HOTEL_OPTIONAL_FIELDS, HOTEL_REQUIRED_FIELDS } from '@/constants';

// Types
import type { HotelArgs } from '@/types';

const ACTION_NAME = 'collect-hotel-info';

export const useProvideInfoHotel = () => {
  const submittedValuesRef = useRef<Partial<Record<string, string>> | null>(null);

  useCopilotAction({
    name: ACTION_NAME,
    description: `Collect missing hotel search parameters from the user via a form UI.
    Call this FIRST when user wants to search hotels but info is incomplete.
    After this returns confirmed JSON, IMMEDIATELY call search-hotels with those exact values.
    Do NOT call search-hotels before this returns.`,
    parameters: HOTEL_BASE_PARAMS,
    renderAndWait: ({ args, status, respond }) => {
      if (status === 'inProgress' && !submittedValuesRef.current) return <LoadingCard lines={5} />;

      if (args.city && args.check_in && args.check_out) {
        respond?.(
          JSON.stringify({
            confirmed: true,
            data: args,
            instruction: 'NOW call search-hotels tool with these exact parameters',
          })
        );
        return <></>;
      }

      return (
        <HotelContextForm
          args={args}
          disabled={status === 'complete' || !!submittedValuesRef.current}
          initialValues={submittedValuesRef.current ?? undefined}
          onConfirm={(filled: HotelArgs) => {
            const userTyped: Partial<Record<string, string>> = {};
            [...HOTEL_REQUIRED_FIELDS, ...HOTEL_OPTIONAL_FIELDS].forEach(({ key }) => {
              const argKey = key as keyof HotelArgs;
              if (!args[argKey] && filled[argKey] != null) {
                userTyped[key] = String(filled[argKey]);
              }
            });
            submittedValuesRef.current = userTyped;
            respond?.(
              JSON.stringify({
                confirmed: true,
                data: filled,
                instruction: 'NOW call search-hotels tool with these exact parameters',
              })
            );
          }}
          onCancel={() => {
            respond?.('User cancelled the hotel search');
          }}
        />
      );
    },
  });
};

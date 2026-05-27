import { useRef } from 'react';
import { useCopilotAction } from '@copilotkit/react-core';

// Components
import { LoadingCard } from '@/components/common';
import { FlightContextForm } from '@/components/FlightContextForm';

// Constants
import { FLIGHT_BASE_PARAMS, FLIGHT_OPTIONAL_FIELDS, FLIGHT_REQUIRED_FIELDS } from '@/constants';

// Types
import type { FlightArgs } from '@/types';

export const useProvideInfoFlight = () => {
  const submittedValuesRef = useRef<Partial<Record<string, string>> | null>(null);

  useCopilotAction({
    name: 'collect-flight-info',
    description: `Collect missing flight search parameters from the user via a form UI.
    Call this FIRST when user wants to search flights but info is incomplete.
    After this returns confirmed JSON, IMMEDIATELY call search-flights with those exact values.
    Do NOT call search-flights before this returns.`,
    parameters: FLIGHT_BASE_PARAMS,
    renderAndWait: ({ args, status, respond }) => {
      // Only show loading before the form has ever appeared
      if (status === 'inProgress' && !submittedValuesRef.current) return <LoadingCard lines={5} />;

      if (args.origin && args.destination && args.departure_date) {
        respond?.(
          JSON.stringify({
            confirmed: true,
            data: args,
            instruction: 'NOW call search-flights tool with these exact parameters',
          })
        );
        return <></>;
      }

      return (
        <FlightContextForm
          args={args}
          disabled={status === 'complete' || !!submittedValuesRef.current}
          initialValues={submittedValuesRef.current ?? undefined}
          onConfirm={(filled: FlightArgs) => {
            // Persist user-typed values in ref so they survive CopilotKit re-renders
            const userTyped: Partial<Record<string, string>> = {};
            [...FLIGHT_REQUIRED_FIELDS, ...FLIGHT_OPTIONAL_FIELDS].forEach(({ key }) => {
              const argKey = key as keyof FlightArgs;
              if (!args[argKey] && filled[argKey] != null) {
                userTyped[key] = String(filled[argKey]);
              }
            });
            submittedValuesRef.current = userTyped;
            respond?.(
              JSON.stringify({
                confirmed: true,
                data: filled,
                instruction: 'NOW call search-flights tool with these exact parameters',
              })
            );
          }}
          onCancel={() => respond?.('User cancelled the flight search')}
        />
      );
    },
  });
};

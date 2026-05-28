import { useRef } from 'react';
import { useCopilotAction } from '@copilotkit/react-core';

// Components
import { LoadingCard } from '@/components/common';
import { FlightContextForm } from '@/components/FlightContextForm';

// Constants
import { FLIGHT_BASE_PARAMS, FLIGHT_OPTIONAL_FIELDS, FLIGHT_REQUIRED_FIELDS } from '@/constants';

// Types
import type { FlightArgs } from '@/types';

const ACTION_NAME = 'collect-flight-info';

export const useProvideInfoFlight = () => {
  const submittedValuesRef = useRef<Partial<Record<string, string>> | null>(null);
  const respondCalledRef = useRef(false);

  useCopilotAction({
    name: ACTION_NAME,
    description: `Collect missing flight search parameters from the user via a form UI.
    Call this FIRST when user wants to search flights but info is incomplete.
    After this returns confirmed JSON, IMMEDIATELY call search-flights with those exact values.
    Do NOT call search-flights before this returns.`,
    parameters: FLIGHT_BASE_PARAMS,
    renderAndWait: ({ args, status, respond }) => {
      if (respond && respondCalledRef.current) {
        respondCalledRef.current = false;
        submittedValuesRef.current = null;
      }

      if (status === 'inProgress' && !submittedValuesRef.current) return <LoadingCard lines={5} />;

      if (args.origin && args.destination && args.departure_date) {
        respondCalledRef.current = true;
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
            const userTyped: Partial<Record<string, string>> = {};
            [...FLIGHT_REQUIRED_FIELDS, ...FLIGHT_OPTIONAL_FIELDS].forEach(({ key }) => {
              const argKey = key as keyof FlightArgs;
              if (!args[argKey] && filled[argKey] != null) {
                userTyped[key] = String(filled[argKey]);
              }
            });
            submittedValuesRef.current = userTyped;
            respondCalledRef.current = true;
            respond?.(
              JSON.stringify({
                confirmed: true,
                data: filled,
                instruction: 'NOW call search-flights tool with these exact parameters',
              })
            );
          }}
          onCancel={() => {
            respondCalledRef.current = true;
            respond?.('User cancelled the flight search');
          }}
        />
      );
    },
  });
};

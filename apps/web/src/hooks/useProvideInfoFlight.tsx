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
  const prevArgsKeyRef = useRef<string | null>(null);
  const submittedValuesRef = useRef<Partial<Record<string, string>> | null>(null);

  useCopilotAction({
    name: 'collect-flight-info',
    description: `Show the flight search form to the user. Call this IMMEDIATELY for any flight or full-trip request — even with ZERO arguments. All parameters are optional; the form collects destination, departure date, origin, and passengers directly from the user. After this returns confirmed JSON, IMMEDIATELY call flightsTool with those exact values. Do NOT ask for flight details via text before calling this.`,
    parameters: FLIGHT_BASE_PARAMS,
    renderAndWait: ({ args, status, respond }) => {
      // Tạo key từ args để detect invocation mới
      const argsKey = `${args.destination ?? ''}-${args.departure_date ?? ''}-${args.origin ?? ''}`;

      // Reset khi agent call với args khác (invocation mới)
      if (prevArgsKeyRef.current !== null && prevArgsKeyRef.current !== argsKey) {
        submittedValuesRef.current = null;
      }
      prevArgsKeyRef.current = argsKey;

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
          onCancel={() => {
            submittedValuesRef.current = null;
            prevArgsKeyRef.current = null;
            respond?.('User cancelled the flight search');
          }}
        />
      );
    },
  });
};

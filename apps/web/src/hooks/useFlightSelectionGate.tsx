import { useHumanInTheLoop } from '@copilotkit/react-core';
import { Plane } from 'lucide-react';

// Components
import { Button, Typography } from '@/components/common';

// Utils
import { cn } from '@/utils';

/**
 * HITL gate — pauses the agent after flight results during a FULL-TRIP booking flow.
 * The agent must pass mode="full-trip" to activate the gate UI.
 * Any other call (standalone flight search) is auto-skipped transparently.
 */
export const useFlightSelectionGate = () => {
  useHumanInTheLoop({
    name: 'waitForFlightSelection_FULL_TRIP_ONLY',
    description:
      'Gate for FULL TRIP booking sequence ONLY. NEVER call for standalone flight searches.',
    parameters: [
      {
        name: 'mode',
        type: 'string',
        description:
          'Must be "full-trip" to activate the gate. Omit or use any other value for standalone searches.',
        required: false,
      },
    ],
    render: ({ args, respond }) => {
      if (!respond) return <></>;

      // Not a full-trip call → unblock agent silently
      if (args?.mode !== 'full-trip') {
        respond({ action: 'skip' });
        return <></>;
      }

      // No flight selected yet → prompt user
      return (
        <div
          className={cn(
            'border-border-secondary bg-background-secondary flex w-full max-w-2xl items-center justify-between gap-3 rounded-lg border px-4 py-3'
          )}
        >
          <div className="flex items-center gap-2">
            <Plane size={14} className="text-text-secondary shrink-0" aria-hidden="true" />
            <Typography variant="body" color="secondary">
              Select a flight from the options above, then continue.
            </Typography>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button size="sm" variant="secondary" onClick={() => respond({ action: 'skip' })}>
              Skip flights
            </Button>
            <Button size="sm" variant="primary" onClick={() => respond({ action: 'confirm' })}>
              Continue ↗
            </Button>
          </div>
        </div>
      );
    },
  });
};

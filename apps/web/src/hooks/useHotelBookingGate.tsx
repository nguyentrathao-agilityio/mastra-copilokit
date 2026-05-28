import { useEffect, useRef } from 'react';
import { useHumanInTheLoop } from '@copilotkit/react-core';
import { Building2 } from 'lucide-react';

// Hooks
import { useTripState } from './useTripState';

// Components
import { Button, Typography, ConfirmBanner } from '@/components/common';

// Utils
import { cn } from '@/utils';

/**
 * Immediately calls `respond` once via useEffect — used when the gate is invoked
 * outside a full-trip context so the agent is unblocked without showing any UI.
 */
const AutoSkip = ({ respond }: { respond: (v: unknown) => void }) => {
  const fired = useRef(false);
  useEffect(() => {
    if (!fired.current) {
      fired.current = true;
      respond({ action: 'skip' });
    }
  }, [respond]);
  return null;
};

/**
 * HITL gate — pauses the agent after hotel results during a FULL-TRIP booking flow.
 * The agent must pass mode="full-trip" to activate the gate UI.
 * Any other call (standalone hotel search) is auto-skipped transparently.
 */
export const useHotelBookingGate = () => {
  const { state } = useTripState();

  useHumanInTheLoop({
    name: 'waitForHotelBooking',
    description:
      'Sequential-booking gate. Call this after search-hotels ONLY during the full-trip flow — pass mode="full-trip". Standalone hotel searches must NOT call this gate.',
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

      // ── Not a full-trip call → unblock agent silently ────────────────────
      if (args?.mode !== 'full-trip') {
        return <AutoSkip respond={respond} />;
      }

      const hotel = state.hotel;

      // ── Hotel already booked → confirm banner ─────────────────────────────
      if (hotel) {
        return (
          <ConfirmBanner
            title={hotel.name}
            description={`${hotel.city} · ★${hotel.starRating}`}
            price={`$${hotel.pricePerNight}/night`}
            onChangeClick={() => respond({ action: 'change' })}
            onConfirmClick={() => respond({ action: 'confirm' })}
          />
        );
      }

      // ── No hotel selected yet → prompt user ───────────────────────────────
      return (
        <div
          className={cn(
            'border-border-secondary bg-background-secondary flex w-full max-w-2xl items-center justify-between gap-3 rounded-lg border px-4 py-3'
          )}
        >
          <div className="flex items-center gap-2">
            <Building2 size={14} className="text-text-secondary shrink-0" aria-hidden="true" />
            <Typography variant="body" color="secondary">
              Select a hotel from the options above, then continue.
            </Typography>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button size="sm" variant="secondary" onClick={() => respond({ action: 'skip' })}>
              Skip hotel
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

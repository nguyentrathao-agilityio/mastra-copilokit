import { Timer } from 'lucide-react';

// Constants
import { TRAVEL_TRANSPORT_MAP } from '@/constants';

// Utils
import { cn } from '@/utils';

// Types
import type { TravelLeg } from '@repo/types';

export interface LegConnectorProps {
  leg: TravelLeg;
  formatDuration: (min: number) => string;
  className?: string;
}

const LegConnector = ({ leg, formatDuration, className }: LegConnectorProps) => {
  const { icon: ModeIcon, label } = TRAVEL_TRANSPORT_MAP[leg.transport];

  return (
    <div className={cn('flex items-start gap-2 py-1 pl-5', className)}>
      <div className="bg-background-secondary border-border-tertiary text-meta font-regular text-text-tertiary flex items-center gap-2 rounded-md border px-3 py-1.5">
        <ModeIcon size={14} aria-hidden="true" />
        <span>{label}</span>
        <span className="text-border-secondary" aria-hidden="true">
          &bull;
        </span>
        <Timer size={12} aria-hidden="true" />
        <span>{formatDuration(leg.durationMin)}</span>
        {leg.distanceKm && leg.distanceKm > 0 && (
          <>
            <span className="text-border-secondary" aria-hidden="true">
              &bull;
            </span>
            <span>{leg.distanceKm} km</span>
          </>
        )}
      </div>
    </div>
  );
};

export { LegConnector };

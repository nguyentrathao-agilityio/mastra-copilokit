import { Timer } from 'lucide-react';

// Utils
import { formatDuration } from '@/utils';

// Types
import type { TourLeg } from '@repo/types';

// Constants
import { TRANSPORT_MAP } from '@/constants';

interface LegConnectorProps {
  leg: TourLeg;
}

const LegConnector = ({ leg }: LegConnectorProps) => {
  const { icon: ModeIcon, label } = TRANSPORT_MAP[leg.mode];

  return (
    <div className="flex items-start gap-2 py-1 pl-5">
      <div className="mt-1 flex h-full w-px self-stretch">
        <div className="bg-border-tertiary h-full w-px" />
      </div>
      <div className="bg-background-secondary border-border-tertiary text-meta font-regular text-text-tertiary flex items-center gap-2 rounded-md border px-3 py-1.5">
        <ModeIcon size={24} aria-hidden="true" />
        <span>{label}</span>
        <span aria-hidden="true" className="text-border-secondary">
          &bull;
        </span>
        <Timer size={12} aria-hidden="true" />
        <span>{formatDuration(leg.durationMin)}</span>
        {leg.distanceKm > 0 && (
          <>
            <span aria-hidden="true" className="text-border-secondary">
              &bull;
            </span>
            <span>{leg.distanceKm} km</span>
          </>
        )}
      </div>
    </div>
  );
};

export default LegConnector;

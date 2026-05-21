import { Clock, Ticket } from 'lucide-react';

// Utils
import { formatDuration } from '@/utils';

// Types
import type { LandmarkStop } from '@repo/types';

// Components
import { Typography } from '@/components/common';

interface StopItemProps {
  stop: LandmarkStop;
  index: number;
}

const StopItem = ({ stop, index }: StopItemProps) => (
  <div className="flex gap-3">
    <span className="bg-badge-primary-bg text-badge-primary-text text-label mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-medium">
      {index + 1}
    </span>

    <div className="border-border-tertiary bg-background-primary flex-1 rounded-lg border px-4 py-3">
      <div className="flex items-start justify-between gap-2">
        <Typography variant="option-title" weight="medium">
          {stop.name}
        </Typography>
        <span className="bg-background-secondary text-text-tertiary text-badge shrink-0 rounded-full px-2.5 py-0.5 font-medium">
          &middot;{formatDuration(stop.visitDurationMin)}
        </span>
      </div>

      <Typography variant="meta" color="secondary" className="mt-0.5 leading-relaxed">
        {stop.description}
      </Typography>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <Typography as="span" variant="meta" color="tertiary" className="flex items-center gap-1">
          <Clock size={11} aria-hidden="true" />
          {stop.openingHours}
        </Typography>
        <Typography as="span" variant="meta" color="tertiary" className="flex items-center gap-1">
          <Ticket size={11} aria-hidden="true" />
          {stop.entranceFee}
        </Typography>
      </div>
    </div>
  </div>
);

export default StopItem;

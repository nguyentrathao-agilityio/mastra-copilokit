import Link from 'next/link';
import { Clock, ExternalLink, Ticket } from 'lucide-react';

// Utils
import { cn, toMapsUrl } from '@/utils';

// Components
import { Card, LegConnector, StepBadge, Typography } from '@/components';
import { LocalTipsDrawer, TipsState } from './LocalTipsDrawer';

// Types
import type { LandmarkStop, TravelLeg } from '@repo/types';

export interface StopCardProps {
  stop: LandmarkStop;
  index: number;
  nextLeg?: TravelLeg;
  tipsState?: TipsState;
  className?: string;
  formatDuration: (min: number) => string;
}

const StopCard = ({
  stop,
  index,
  nextLeg,
  formatDuration,
  tipsState,
  className,
}: StopCardProps) => {
  const { name, description, visitDurationMin, openingHours, entranceFee, lat, lng } = stop;
  const mapsUrl = toMapsUrl(lat, lng);

  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex gap-3">
        <StepBadge index={index} className="mt-0.5" />

        <Card paddingClass="px-4 py-3" className="flex-1">
          {/* Title + visit duration */}
          <div className="flex items-start justify-between gap-2">
            <Typography variant="option-title" weight="medium">
              {name}
            </Typography>
            {visitDurationMin && (
              <span className="bg-background-secondary text-text-tertiary text-badge shrink-0 rounded-full px-2.5 py-0.5 font-medium">
                ~{formatDuration(visitDurationMin)}
              </span>
            )}
          </div>

          {/* Description */}
          {description && (
            <Typography variant="meta" color="secondary" className="mt-0.5 leading-relaxed">
              {description}
            </Typography>
          )}

          {/* Meta row */}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            {openingHours && (
              <span className="text-text-tertiary text-meta font-regular flex items-center gap-1">
                <Clock size={11} aria-hidden="true" />
                {openingHours}
              </span>
            )}
            {entranceFee && (
              <span className="text-text-tertiary text-meta font-regular flex items-center gap-1">
                <Ticket size={11} aria-hidden="true" />
                {entranceFee === 0 ? 'Free entry' : `${entranceFee.toLocaleString()}`}
              </span>
            )}
            {mapsUrl && (
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary text-meta font-regular flex items-center gap-1 underline underline-offset-2"
              >
                <ExternalLink size={11} aria-hidden="true" />
                Map
              </Link>
            )}
          </div>

          {/* Local tips drawer */}
          {tipsState && <LocalTipsDrawer stopName={name} {...tipsState} />}
        </Card>
      </div>

      {/* Leg connector to next stop */}
      {nextLeg && <LegConnector leg={nextLeg} formatDuration={formatDuration} className="mt-1" />}
    </div>
  );
};

export default StopCard;

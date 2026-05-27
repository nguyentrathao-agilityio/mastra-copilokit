import { Clock, MapPin } from 'lucide-react';

import { cn, formatDuration, toTravelLeg } from '@/utils';
import type { LandmarkTourRoute } from '@repo/types';
import { Card, Divider, LoadingCard, Typography } from '@/components/common';
import StopCard from '@/components/StopCard';

interface RouteCardProps {
  data?: LandmarkTourRoute;
  isLoading?: boolean;
  className?: string;
}

const RouteCard = ({ data, isLoading = false, className }: RouteCardProps) => {
  if (isLoading || !data) return <LoadingCard lines={5} />;

  return (
    <Card className={cn('lex w-full max-w-2xl flex-col gap-3', className)}>
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} className="text-text-secondary" aria-hidden="true" />
          <Typography variant="option-title" weight="medium">
            {data.city} landmark route
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={11} className="text-text-tertiary" aria-hidden="true" />
          <Typography as="span" variant="meta" color="tertiary">
            {formatDuration(data.totalDurationMin)}
          </Typography>
        </div>
      </div>

      {/* Summary */}
      {data.stops.length > 0 && (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          <span className="bg-badge-primary-bg text-badge-primary-text text-badge rounded-full px-2 py-0.5 font-medium">
            {data.stops.length} stops
          </span>
        </div>
      )}

      {/* Stop list */}
      {data.stops.length > 0 && (
        <div className="mt-3">
          <Divider />
          <div className="mt-3 flex flex-col gap-1">
            {data.stops.map((stop, index) => (
              <StopCard
                key={stop.name}
                stop={stop}
                index={index + 1}
                formatDuration={formatDuration}
                {...(index < data.legs.length && { nextLeg: toTravelLeg(data.legs[index]) })}
              />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default RouteCard;

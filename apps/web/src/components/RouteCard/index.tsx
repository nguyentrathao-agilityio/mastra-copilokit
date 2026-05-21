import { Clock, MapPin } from 'lucide-react';

import { formatDuration, toTravelLeg } from '@/utils';
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
    <Card className={className}>
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-text-secondary" aria-hidden="true" />
          <Typography variant="card-title" weight="medium">
            {data.city} landmark route
          </Typography>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={12} className="text-text-tertiary" aria-hidden="true" />
          <Typography as="span" variant="meta" color="tertiary">
            {formatDuration(data.totalDurationMin)} total
          </Typography>
        </div>
      </div>

      {/* Summary */}
      {data.stops.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="bg-background-secondary text-text-secondary text-meta rounded-full px-2.5 py-0.5">
            {data.stops.length} stops
          </span>
        </div>
      )}

      {/* Stop list */}
      {data.stops.length > 0 && (
        <div className="mt-4">
          <Divider />
          <div className="mt-4 flex flex-col">
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

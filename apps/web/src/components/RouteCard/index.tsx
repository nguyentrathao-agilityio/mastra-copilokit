import { Clock, MapPin } from 'lucide-react';

// Utils
import { cn, formatDuration } from '@/utils';

// Types
import type { LandmarkTourRoute } from '@repo/types';

// Components
import { Divider, LoadingCard, Typography } from '@/components/common';
import LegConnector from './LegConnector';
import StopItem from './StopItem';

interface RouteCardProps {
  data?: LandmarkTourRoute;
  isLoading?: boolean;
  className?: string;
}

const RouteCard = ({ data, isLoading = false, className }: RouteCardProps) => {
  if (isLoading || !data) return <LoadingCard lines={5} />;

  return (
    <div
      className={cn(
        'border-border-tertiary bg-background-primary rounded-lg border px-5 py-4',
        className
      )}
    >
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

      {/* Summary badges */}
      {data.stops.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="bg-background-secondary text-text-secondary text-meta rounded-full px-2.5 py-0.5">
            {data.stops.length} stops
          </span>
        </div>
      )}

      {/* Stops */}
      {data.stops.length > 0 && (
        <div className="mt-4">
          <Divider />
          <div className="mt-4 flex flex-col">
            {data.stops.map((stop, index) => (
              <div key={stop.name}>
                <StopItem stop={stop} index={index} />
                {index < data.legs.length && <LegConnector leg={data.legs[index]!} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteCard;

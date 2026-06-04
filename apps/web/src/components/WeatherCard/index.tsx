import { CloudSun, Sun } from 'lucide-react';

// Utils
import { cn } from '@/utils';

// Components
import { Card, LoadingCard, Typography } from '@/components';
import { WeatherDayCard } from './WeatherDayCard';

// Utils
import { getBestDayIndex } from '@/utils';

// Constants
import { WEATHER_FORECAST_MAX_DAYS } from '@/constants';

// Types
import type { WeatherResult } from '@repo/types';

interface WeatherCardProps {
  data: WeatherResult;
  className?: string;
}

const WeatherCard = ({ data, className }: WeatherCardProps) => {
  const visibleDays = (data.daily ?? []).slice(0, WEATHER_FORECAST_MAX_DAYS);
  const bestIdx = getBestDayIndex(visibleDays);

  return (
    <Card
      paddingClass="px-5 py-4"
      className={cn('flex w-full max-w-2xl flex-col gap-4', className)}
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <CloudSun size={20} className="text-text-secondary" aria-hidden="true" />
          <Typography variant="card-title" weight="medium">
            {data.location.name} Weather
          </Typography>
        </div>
        <Typography variant="meta" color="tertiary" className="mt-0.5">
          {visibleDays.length}-day forecast
        </Typography>
      </div>

      {/* Day cards grid */}
      {visibleDays.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {visibleDays.map((day, idx) => (
            <WeatherDayCard key={day.date} day={day} dayNumber={idx + 1} isBest={idx === bestIdx} />
          ))}
        </div>
      )}

      {/* Best-day banner — derived from precipitationProbabilityMax */}
      {visibleDays.length > 0 && (
        <div className="border-border-tertiary bg-background-recommended flex items-center gap-2 rounded-md border px-3 py-2">
          <Sun size={14} className="text-text-secondary shrink-0" aria-hidden="true" />
          <Typography as="span" variant="meta" color="secondary">
            Best days for outdoor activities: Day {bestIdx + 1}
          </Typography>
        </div>
      )}

      {data.travelTip && (
        <div className="border-border-tertiary bg-background-primary flex items-start gap-2 rounded-md border px-3 py-2">
          <Typography as="span" variant="meta" color="tertiary">
            <u>Tip:</u> {data.travelTip}
          </Typography>
        </div>
      )}
    </Card>
  );
};

export { WeatherCard };
export { WeatherDayCard } from './WeatherDayCard';

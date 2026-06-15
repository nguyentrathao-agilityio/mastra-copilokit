import { CloudSun, Sun } from 'lucide-react';

// Utils
import { cn } from '@/utils';

// Components
import { Typography } from '@/components';
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
    <div
      className={cn(
        'border-border-tertiary w-full max-w-2xl overflow-hidden rounded-lg shadow',
        className
      )}
    >
      {/* Header */}
      <div className="bg-user-gradient px-5 py-3">
        <div className="flex items-center gap-2">
          <CloudSun size={20} className="text-white/70" aria-hidden="true" />
          <Typography variant="card-title" weight="medium" className="text-white">
            {data.location.name} Weather
          </Typography>
        </div>
        <Typography variant="meta" className="mt-0.5 text-white/70">
          {visibleDays.length}-day{visibleDays.length !== 1 ? 's' : ''} forecast
        </Typography>
      </div>

      {/* Body */}
      <div className="bg-background-primary flex flex-col gap-4 px-5 py-4">
        {/* Day cards grid */}
        {visibleDays.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {visibleDays.map((day, idx) => (
              <WeatherDayCard
                key={day.date}
                day={day}
                dayNumber={idx + 1}
                isBest={visibleDays.length > 1 && idx === bestIdx}
              />
            ))}
          </div>
        )}

        {/* Best-day banner */}
        {visibleDays.length > 1 && (
          <div className="border-border-tertiary bg-background-recommended flex items-center gap-2 rounded-md border px-3 py-2">
            <Sun size={14} className="text-text-secondary shrink-0" aria-hidden="true" />
            <Typography as="span" variant="meta" color="secondary">
              Best day for outdoor activities: Day {bestIdx + 1}
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
      </div>
    </div>
  );
};

export { WeatherCard };
export { WeatherDayCard } from './WeatherDayCard';

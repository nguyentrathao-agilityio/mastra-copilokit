import { Droplets } from 'lucide-react';

// Utils
import { cn, formatDayDate, getWeatherIcon, toFahrenheit } from '@/utils';

// Components
import { Badge, StepBadge, Typography } from '@/components';

// Types
import type { DailyForecast } from '@repo/types';

interface WeatherDayCardProps {
  day: DailyForecast;
  dayNumber: number;
  isBest?: boolean;
}

const WeatherDayCard = ({ day, dayNumber, isBest = false }: WeatherDayCardProps) => {
  const WeatherIcon = getWeatherIcon(day.weatherCode);
  const highF = toFahrenheit(day.tempMaxC);
  const lowF = toFahrenheit(day.tempMinC);
  const rainPct = day.precipitationProbabilityMax ?? 0;

  return (
    <div
      className={cn(
        'flex min-w-[14%] flex-col gap-2 rounded-lg border p-3',
        isBest
          ? 'border-border-info bg-background-info border-2'
          : 'border-border-tertiary bg-background-primary'
      )}
    >
      {/* Header: day number + date + best badge */}
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center gap-1.5">
          <StepBadge
            index={dayNumber}
            className="bg-background-info text-text-tertiary border-border-info h-6 w-6 border"
          />
          <Typography variant="meta" color="secondary">
            {formatDayDate(day.date)}
          </Typography>
        </div>
        {isBest && <Badge variant="success" label="Best" showIcon={false} />}
      </div>

      {/* Condition icon + label */}
      <div className="flex items-start gap-1.5">
        <WeatherIcon size={16} className="text-text-secondary mt-0.5 shrink-0" aria-hidden="true" />
        <Typography variant="meta" weight="medium" color="primary">
          {day.description}
        </Typography>
      </div>

      {/* High / Low temps — numeric exception allows text-heading (18 px) */}
      <div className="flex items-baseline gap-1.5">
        <span className="text-heading text-text-primary font-medium">{highF}°</span>
        <span className="text-body font-regular text-text-tertiary">{lowF}°</span>
      </div>

      {/* Precipitation probability */}
      <div className="flex items-center gap-1">
        <Droplets size={12} className="text-text-tertiary" aria-hidden="true" />
        <Typography variant="meta" color="tertiary">
          {rainPct}%
        </Typography>
      </div>
    </div>
  );
};

export { WeatherDayCard };

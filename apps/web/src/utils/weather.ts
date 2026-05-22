import {
  type LucideIcon,
  Cloud,
  CloudLightning,
  CloudRain,
  CloudSun,
  Snowflake,
  Sun,
} from 'lucide-react';

// Utils
import type { DailyForecast } from '@repo/types';

// Constants
import { FAHRENHEIT_MULTIPLIER, FAHRENHEIT_OFFSET } from '@/constants';

/** Converts Celsius to Fahrenheit, rounded to the nearest integer. */
export const toFahrenheit = (c: number): number =>
  Math.round(c * FAHRENHEIT_MULTIPLIER + FAHRENHEIT_OFFSET);

/** Maps a WMO weather-interpretation code to the closest lucide-react icon. */
export const getWeatherIcon = (code: number): LucideIcon => {
  if (code === 0) return Sun;
  if (code <= 3) return CloudSun;
  if (code <= 48) return Cloud;
  if (code <= 67) return CloudRain;
  if (code <= 77) return Snowflake;
  if (code <= 82) return CloudRain;
  if (code <= 86) return Snowflake;

  return CloudLightning;
};

/** Formats an ISO date string (YYYY-MM-DD) as "Mon DD", e.g. "May 29". */
export const formatDayDate = (dateStr: string): string => {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

/**
 * Returns the index of the day with the lowest precipitation probability.
 * Defaults to index 0 when all values are missing or equal.
 */
export const getBestDayIndex = (daily: DailyForecast[]): number =>
  daily.reduce((bestIdx, day, idx, arr) => {
    const current = day.precipitationProbabilityMax ?? 100;
    const best = arr[bestIdx].precipitationProbabilityMax ?? 100;

    return current < best ? idx : bestIdx;
  }, 0);

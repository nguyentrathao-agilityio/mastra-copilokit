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

const WEATHER_ICON_THRESHOLDS: [number, LucideIcon][] = [
  [0, Sun],
  [3, CloudSun],
  [48, Cloud],
  [67, CloudRain],
  [77, Snowflake],
  [82, CloudRain],
  [86, Snowflake],
];

/** Converts Celsius to Fahrenheit, rounded to the nearest integer. */
export const toFahrenheit = (c: number): number =>
  Math.round(c * FAHRENHEIT_MULTIPLIER + FAHRENHEIT_OFFSET);

/** Maps a WMO weather-interpretation code to the closest lucide-react icon. */
export const getWeatherIcon = (code?: number): LucideIcon => {
  if (code === undefined) return CloudLightning;
  return WEATHER_ICON_THRESHOLDS.find(([threshold]) => code <= threshold)?.[1] ?? CloudLightning;
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

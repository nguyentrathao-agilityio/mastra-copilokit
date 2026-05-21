import type { TourLeg, TravelLeg } from '@repo/types';

/**
 * Adapts a TourLeg (RouteCard API shape) to a TravelLeg (LegConnector shape).
 * Renames the `mode` field to `transport`.
 */
export const toTravelLeg = (leg: TourLeg): TravelLeg => ({
  transport: leg.mode,
  durationMin: leg.durationMin,
  distanceKm: leg.distanceKm,
});

/**
 * Returns a Google Maps URL for the given coordinates, or null if either is undefined.
 */
export const toMapsUrl = (lat?: number, lng?: number): string | null => {
  if (typeof lat !== 'number' || typeof lng !== 'number') return null;
  return `https://www.google.com/maps?q=${lat},${lng}`;
};

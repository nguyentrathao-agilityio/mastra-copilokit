// Components
import { Divider } from '@/components/common';

// Sub-components
import { TripSummaryHeader } from './TripSummaryHeader';
import { TripFlightSection } from './TripFlightSection';
import { TripHotelSection } from './TripHotelSection';
import { TripPlacesSection } from './TripPlacesSection';
import { TripRouteSection } from './TripRouteSection';
import { TripTipsSection } from './TripTipsSection';
import { TripCostBreakdown } from './TripCostBreakdown';

// Types
import type { SelectedFlight, Hotel } from '@repo/types';
import { TripSummaryResult } from '@repo/schemas';

// Utils
import { cn } from '@/utils';

interface TripSummaryCardProps {
  /** Full summary from the trip-summary-tool */
  data: TripSummaryResult;
  /** Booked flights from local TripState (takes priority over suggested) */
  bookedFlight?: SelectedFlight;
  /** Booked hotel from local TripState (takes priority over suggested) */
  bookedHotel?: Hotel;
  className?: string;
}

/**
 * Unified A-to-Z trip summary card.
 * Combines local booking state with fresh tool data into a single view.
 * Renders: trip header · flight · hotel · top places · route · local tips · cost estimate.
 */
const TripSummaryCard = ({ data, bookedFlight, bookedHotel, className }: TripSummaryCardProps) => {
  if (!data) return null;

  const hasFlight = !!(bookedFlight?.departure ?? data.suggestedFlight);
  const hasHotel = !!(bookedHotel ?? data.suggestedHotel);

  return (
    <div
      className={cn(
        'border-border-tertiary flex w-full max-w-2xl flex-col gap-3 overflow-hidden rounded-lg border px-5 py-4',
        className
      )}
    >
      {/* Header */}
      <TripSummaryHeader
        destination={data.destination}
        startDate={data.startDate}
        endDate={data.endDate}
        travelers={data.travelers}
        days={data.days}
      />

      {/* Flight */}
      {hasFlight && (
        <>
          <Divider />
          <TripFlightSection
            suggested={data.suggestedFlight}
            booked={bookedFlight?.departure ?? null}
          />
        </>
      )}

      {/* Hotel */}
      {hasHotel && (
        <>
          <Divider />
          <TripHotelSection
            suggested={data.suggestedHotel}
            booked={bookedHotel ?? null}
            nights={data.days}
          />
        </>
      )}

      {/* Top places */}
      {data.places?.results?.length && (
        <>
          <Divider />
          <TripPlacesSection places={data.places} />
        </>
      )}

      {/* Day-by-day route plan */}
      {data.route?.stops?.length && (
        <>
          <Divider />
          <TripRouteSection route={data.route} days={data.days} startDate={data.startDate} />
        </>
      )}

      {/* Local tips */}
      {data.tips?.tips?.length && (
        <>
          <Divider />
          <TripTipsSection tips={data.tips} />
        </>
      )}

      {/* Cost estimate */}
      <Divider />
      <TripCostBreakdown estimate={data.costEstimate} />
    </div>
  );
};

export { TripSummaryCard };
export { TripSummaryConfirmCard } from './TripSummaryConfirmCard';

import { createWorkflow, createStep } from '@mastra/core/workflows';

// Services
import {
  getWeather,
  searchFlights,
  getRoute,
  getLocalTips,
  searchHotels,
  getPlaces,
} from '@/services';

// Schemas
import { TripSummaryResultSchema, TripCostEstimateSchema } from '@repo/schemas';
import { FetchedDataSchema, TripSummaryInputSchema, ValidatedInputSchema } from '@/schemas';

// Utils
import { estimateDailyCosts } from '@/utils';

// ─── Step 1 — Validate & normalize input ──────────────────────────────────
const validateInputStep = createStep({
  id: 'validate-input',
  description: 'Normalize dates, compute trip duration, and set defaults',
  inputSchema: TripSummaryInputSchema,
  outputSchema: ValidatedInputSchema,
  execute: async ({ inputData }) => {
    const {
      destination,
      startDate,
      endDate,
      travelers = 1,
      flightOrigin,
      skipFlights = false,
      skipHotel = false,
      bookedFlightPrice,
      bookedHotelPricePerNight,
    } = inputData;

    const today = new Date().toISOString().split('T')[0];
    const resolvedStart = startDate ?? today;
    const resolvedEnd = endDate ?? today;

    const days = Math.max(
      1,
      Math.ceil(
        (new Date(resolvedEnd).getTime() - new Date(resolvedStart).getTime()) /
          (1000 * 60 * 60 * 24)
      )
    );

    return {
      destination,
      startDate: resolvedStart,
      endDate: resolvedEnd,
      travelers,
      days,
      flightOrigin,
      skipFlights,
      skipHotel,
      bookedFlightPrice,
      bookedHotelPricePerNight,
    };
  },
});

// ─── Step 2 — Fetch all data in parallel ──────────────────────────────────
const fetchAllDataStep = createStep({
  id: 'fetch-all-data',
  description: 'Fetch weather, flights, hotel, places, tips, and route in parallel',
  inputSchema: ValidatedInputSchema,
  outputSchema: FetchedDataSchema,
  execute: async ({ inputData }) => {
    const {
      destination,
      startDate,
      endDate,
      travelers,
      days,
      flightOrigin,
      skipFlights,
      skipHotel,
      bookedFlightPrice,
      bookedHotelPricePerNight,
    } = inputData;

    const [weatherResult, flightResult, hotelResult, placesResult, tipsResult, routeResult] =
      await Promise.allSettled([
        // Weather — always fetch for trip duration
        getWeather({ city: destination, days: Math.min(days + 1, 7) }),

        // Flights — only search if not already booked and origin is provided
        !skipFlights && flightOrigin
          ? searchFlights({
              origin: flightOrigin,
              destination,
              departure_date: startDate,
              adults: travelers,
              sort: 'price_asc',
            })
          : Promise.reject(new Error('Flights skipped')),

        // Hotel — only search if not already booked
        !skipHotel
          ? searchHotels({
              city: destination,
              checkIn: startDate,
              checkOut: endDate,
              adults: travelers,
              availableOnly: true,
            })
          : Promise.reject(new Error('Hotel skipped')),

        // Places — always fetch top 8 by rating
        getPlaces({ city: destination, sort: 'rating_desc', limit: 8 }),

        // Local tips — essential only for summary compactness
        getLocalTips({ city: destination, essential_only: true }),

        // Route — stops proportional to trip length (capped at 8)
        getRoute({ city: destination, maxStops: Math.min(days + 2, 8) }),
      ]);

    return {
      destination,
      startDate,
      endDate,
      travelers,
      days,
      weatherResult: weatherResult.status === 'fulfilled' ? weatherResult.value : null,
      flightResult: flightResult.status === 'fulfilled' ? flightResult.value : null,
      hotelResult: hotelResult.status === 'fulfilled' ? hotelResult.value : null,
      placesResult: placesResult.status === 'fulfilled' ? placesResult.value : null,
      tipsResult: tipsResult.status === 'fulfilled' ? tipsResult.value : null,
      routeResult: routeResult.status === 'fulfilled' ? routeResult.value : null,
      bookedFlightPrice,
      bookedHotelPricePerNight,
    };
  },
});

// ─── Step 3 — Build unified summary with cost estimate ────────────────────
const buildTripSummaryStep = createStep({
  id: 'build-trip-summary',
  description: 'Pick best options and compute full cost estimate',
  inputSchema: FetchedDataSchema,
  outputSchema: TripSummaryResultSchema,
  execute: async ({ inputData }) => {
    const {
      destination,
      startDate,
      endDate,
      travelers,
      days,
      weatherResult,
      flightResult,
      hotelResult,
      placesResult,
      tipsResult,
      routeResult,
      bookedFlightPrice,
      bookedHotelPricePerNight,
    } = inputData;

    // Pick cheapest available flight
    const suggestedFlight = flightResult?.results?.length
      ? flightResult.results.reduce((best, f) => (f.price < best.price ? f : best))
      : null;

    // Pick highest-rated available hotel
    const suggestedHotel = hotelResult?.results?.filter((h) => h.available)?.[0] ?? null;

    // ── Cost estimate ────────────────────────────────────────────────────
    const currency = suggestedFlight?.currency ?? suggestedHotel?.currency ?? 'USD';

    const flightTotal = suggestedFlight
      ? suggestedFlight.price * travelers
      : (bookedFlightPrice ?? 0) * travelers;
    const hotelTotal = suggestedHotel
      ? suggestedHotel.pricePerNight * days
      : (bookedHotelPricePerNight ?? 0) * days;

    const rates = await estimateDailyCosts(destination);
    const foodTotal = rates.food * days * travelers;
    const activitiesTotal = rates.activities * days;
    const localTransportTotal = rates.transport * days;
    const grandTotal = flightTotal + hotelTotal + foodTotal + activitiesTotal + localTransportTotal;

    const costEstimate = TripCostEstimateSchema.parse({
      flightTotal,
      hotelTotal,
      foodTotal,
      activitiesTotal,
      localTransportTotal,
      grandTotal,
      currency,
      days,
      travelers,
      breakdown: [
        ...(flightTotal > 0
          ? [
              {
                label: 'Flights',
                amount: flightTotal,
                currency,
                note: `${travelers} × $${suggestedFlight?.price}`,
              },
            ]
          : []),
        ...(hotelTotal > 0
          ? [
              {
                label: 'Hotel',
                amount: hotelTotal,
                currency,
                note: `${days} night${days !== 1 ? 's' : ''} × $${suggestedHotel?.pricePerNight}/night`,
              },
            ]
          : []),
        { label: 'Food & drinks', amount: foodTotal, currency, note: `~$${rates.food}/person/day` },
        {
          label: 'Activities',
          amount: activitiesTotal,
          currency,
          note: `~$${rates.activities}/day`,
        },
        {
          label: 'Local transport',
          amount: localTransportTotal,
          currency,
          note: `~$${rates.transport}/day`,
        },
      ],
    });

    // ── Parse final result ───────────────────────────────────────────────
    const parsed = TripSummaryResultSchema.safeParse({
      destination,
      startDate,
      endDate,
      travelers,
      days,
      weather: weatherResult,
      suggestedFlight,
      suggestedHotel,
      places: placesResult,
      tips: tipsResult,
      route: routeResult,
      costEstimate,
    });

    if (!parsed.success) {
      throw new Error(`Failed to build trip summary: ${parsed.error.message}`);
    }

    return parsed.data;
  },
});

// ─── Workflow ──────────────────────────────────────────────────────────────
// Full agent flow (HITL handled by CopilotKit hooks in the web app):
//
// User: "full trip tokyo 3 days from DN"
//          │
//          ▼
// useProvideInfoFlight (HITL form) — user fills origin / dates / pax
//          │
//          ▼
// flightsTool ──────── renders FlightCard
//          │
//          ▼
// useFlightSelectionGate (HITL gate) ◄──────────────┐
//   ┌── state.flights set?                           │
//   │   YES → ConfirmBanner → [Change] ─────────────┘
//   │                       → [Confirm] → proceed
//   │   NO  → "Select a flight above, then continue"
//   └──       [Skip flights] or [Continue ↗] → proceed
//          │
//          ▼
// hotelTool ──────── renders HotelCard
//          │
//          ▼
// useHotelBookingGate (HITL gate) ◄─────────────────┐
//   ┌── state.hotel set?                             │
//   │   YES → ConfirmBanner → [Change] ─────────────┘
//   │                       → [Confirm] → proceed
//   │   NO  → "Select a hotel above, then continue"
//   └──       [Skip hotel] or [Continue ↗] → proceed
//          │
//          ▼
// confirmTripSummary (HITL) — useTripSummaryAction
//          │ confirmed
//          ▼
// tripSummaryTool → this workflow ─────────────────────────────────────────
//   Step 1 — validate-input
//     Normalize dates, compute trip duration, set defaults.
//   Step 2 — fetch-all-data (parallel)
//     Weather · Flights (skip if skipFlights) · Hotels (skip if skipHotel)
//     Places · Tips · Route
//   Step 3 — build-trip-summary
//     Pick cheapest flight + best available hotel from results.
//     Fall back to bookedFlightPrice / bookedHotelPricePerNight when skipped.
//          │
//          ▼
// TripSummaryCard (rendered by useTripSummaryAction)
export const tripSummaryWorkflow = createWorkflow({
  id: 'trip-summary-workflow',
  description:
    'Full trip summary — weather, flights, hotel, places, tips, route, and cost estimate in one unified result',
  inputSchema: TripSummaryInputSchema,
  outputSchema: TripSummaryResultSchema,
  steps: [validateInputStep, fetchAllDataStep, buildTripSummaryStep],
})
  .then(validateInputStep)
  .then(fetchAllDataStep)
  .then(buildTripSummaryStep)
  .commit();

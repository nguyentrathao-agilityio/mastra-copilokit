import { z } from 'zod';

export const FlightSortSchema = z.enum([
  'departure_asc',
  'departure_desc',
  'price_asc',
  'price_desc',
  'duration_asc',
  'duration_desc',
]);

export const FlightInputSchema = z.object({
  origin: z.string().describe('IATA 3-letter departure airport code, e.g. DAD'),
  destination: z.string().describe('IATA 3-letter arrival airport code, e.g. SGN'),
  departure_date: z.string().describe('Departure date in YYYY-MM-DD format'),
  adults: z.number().min(1).optional().describe('Number of adult passengers (default 1)'),
  return_date: z.string().optional().describe('Return date in YYYY-MM-DD — enables round-trip'),
  airline: z.string().optional().describe('Filter by IATA airline code, e.g. VN'),
  max_price: z.number().optional().describe('Maximum price per adult in USD'),
  max_stops: z.number().min(0).optional().describe('Maximum number of stops (0 = nonstop only)'),
  sort: FlightSortSchema.optional().describe('Sort order for results'),
});

// API response — snake_case as returned by the external service
const ApiAirlineSchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const ApiFlightSchema = z.object({
  id: z.string(),
  airline: ApiAirlineSchema,
  flight_number: z.string(),
  origin: z.string(),
  destination: z.string(),
  departure_time: z.string(),
  arrival_time: z.string(),
  duration_minutes: z.number(),
  price: z.number(),
  currency: z.string(),
  seats_available: z.number(),
  stops: z.number(),
});

export const ApiFlightSearchResponseSchema = z.object({
  count: z.number(),
  results: z.array(ApiFlightSchema),
  return_count: z.number().nullish(),
  return_results: z.array(ApiFlightSchema).nullish(),
});

// Tool output — camelCase to match shared Flight types
const AirlineSchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const FlightSchema = z.object({
  id: z.string(),
  airline: AirlineSchema,
  flightNumber: z.string(),
  origin: z.string(),
  destination: z.string(),
  departureTime: z.string(),
  arrivalTime: z.string(),
  durationMinutes: z.number(),
  price: z.number(),
  currency: z.string(),
  seatsAvailable: z.number(),
  stops: z.number(),
});

export const FlightSearchResultSchema = z.object({
  count: z.number(),
  results: z.array(FlightSchema),
  returnCount: z.number().optional(),
  returnResults: z.array(FlightSchema).optional(),
});

export type FlightInput = z.infer<typeof FlightInputSchema>;
export type ApiFlightSearchResponse = z.infer<typeof ApiFlightSearchResponseSchema>;
export type FlightSearchResult = z.infer<typeof FlightSearchResultSchema>;

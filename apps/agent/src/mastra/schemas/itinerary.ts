import { z } from 'zod';

const ItineraryFlightInputSchema = z.object({
  airline: z.string(),
  flightNumber: z.string().optional(),
  departureCity: z.string(),
  arrivalCity: z.string(),
  departureTime: z.string().optional(),
  arrivalTime: z.string().optional(),
  price: z.number().optional(),
  currency: z.string().optional(),
});

const ItineraryHotelInputSchema = z.object({
  name: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
  pricePerNight: z.number().optional(),
  currency: z.string().optional(),
  rating: z.number().optional(),
  address: z.string().optional(),
});

const ItineraryActivityInputSchema = z.object({
  time: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  duration: z.string().optional(),
  location: z.string().optional(),
  category: z.string().optional(),
});

const ItineraryMealInputSchema = z.object({
  type: z.enum(['breakfast', 'lunch', 'dinner', 'snack']),
  suggestion: z.string(),
  restaurant: z.string().optional(),
  cuisine: z.string().optional(),
  notes: z.string().optional(),
});

const ItineraryDayInputSchema = z.object({
  day: z.number(),
  date: z.string().optional(),
  title: z.string(),
  summary: z.string().optional(),
  activities: z.array(ItineraryActivityInputSchema),
  meals: z.array(ItineraryMealInputSchema),
  localTips: z.array(z.string()).optional(),
  notes: z.string().optional(),
});

export const ItineraryInputSchema = z.object({
  destination: z.string().describe('Primary destination city or region'),
  country: z.string().optional().describe('Country of destination'),
  startDate: z.string().describe('Trip start date in YYYY-MM-DD format'),
  endDate: z.string().describe('Trip end date in YYYY-MM-DD format'),
  totalDays: z.number().describe('Total number of trip days'),
  travelers: z.number().describe('Number of travelers'),
  flight: ItineraryFlightInputSchema.optional().describe('Confirmed or suggested flight details'),
  hotel: ItineraryHotelInputSchema.optional().describe('Confirmed or suggested hotel details'),
  days: z.array(ItineraryDayInputSchema).describe('Day-by-day schedule'),
  generalTips: z.array(z.string()).optional().describe('General travel tips for the destination'),
  notes: z.string().optional().describe('Any additional notes or remarks'),
});

export type ItineraryInput = z.infer<typeof ItineraryInputSchema>;

import { z } from 'zod';

export const ItineraryFlightSchema = z.object({
  airline: z.string(),
  flightNumber: z.string().optional(),
  departureCity: z.string(),
  arrivalCity: z.string(),
  departureTime: z.string().optional(),
  arrivalTime: z.string().optional(),
  price: z.number().optional(),
  currency: z.string().optional(),
});

export const ItineraryHotelSchema = z.object({
  name: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
  pricePerNight: z.number().optional(),
  currency: z.string().optional(),
  rating: z.number().optional(),
  address: z.string().optional(),
});

export const ItineraryActivitySchema = z.object({
  time: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  duration: z.string().optional(),
  location: z.string().optional(),
  category: z.string().optional(),
});

export const ItineraryMealSchema = z.object({
  type: z.enum(['breakfast', 'lunch', 'dinner', 'snack']),
  suggestion: z.string(),
  restaurant: z.string().optional(),
  cuisine: z.string().optional(),
  notes: z.string().optional(),
});

export const ItineraryDaySchema = z.object({
  day: z.number(),
  date: z.string().optional(),
  title: z.string(),
  summary: z.string().optional(),
  activities: z.array(ItineraryActivitySchema),
  meals: z.array(ItineraryMealSchema),
  localTips: z.array(z.string()).optional(),
  notes: z.string().optional(),
});

export const ItineraryResultSchema = z.object({
  destination: z.string(),
  country: z.string().optional(),
  startDate: z.string(),
  endDate: z.string(),
  totalDays: z.number(),
  travelers: z.number(),
  flight: ItineraryFlightSchema.optional(),
  hotel: ItineraryHotelSchema.optional(),
  days: z.array(ItineraryDaySchema),
  generalTips: z.array(z.string()).optional(),
  notes: z.string().optional(),
});

export type ItineraryResult = z.infer<typeof ItineraryResultSchema>;

import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Schemas
import { ItineraryResultSchema } from '@repo/schemas';
import { ItineraryInputSchema } from '@/schemas';

import type { ItineraryResult } from '@repo/types';

const buildItinerary = async (
  input: z.infer<typeof ItineraryInputSchema>
): Promise<ItineraryResult> => ({
  destination: input.destination,
  country: input.country,
  startDate: input.startDate,
  endDate: input.endDate,
  totalDays: input.totalDays,
  travelers: input.travelers,
  flight: input.flight,
  hotel: input.hotel,
  days: input.days.map((day) => ({
    day: day.day,
    date: day.date,
    title: day.title,
    summary: day.summary,
    activities: day.activities.map((a) => ({
      time: a.time,
      name: a.name,
      description: a.description,
      duration: a.duration,
      location: a.location,
      category: a.category,
    })),
    meals: day.meals.map((m) => ({
      type: m.type,
      suggestion: m.suggestion,
      restaurant: m.restaurant,
      cuisine: m.cuisine,
      notes: m.notes,
    })),
    localTips: day.localTips,
    notes: day.notes,
  })),
  generalTips: input.generalTips,
  notes: input.notes,
});

export const itineraryTool = createTool({
  id: 'create-itinerary',
  description:
    'Assemble a complete day-by-day itinerary summary from all gathered trip details — weather context, places, local tips, flight, and hotel.',
  inputSchema: ItineraryInputSchema,
  outputSchema: ItineraryResultSchema,
  execute: buildItinerary,
});

import { z } from 'zod';

// Response schema from the weather API
export const WeatherResponseSchema = z.object({
  location: z.object({
    name: z.string(),
    country: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    timezone: z.string().optional(),
  }),
  current: z.object({
    time: z.string(), // ISO 8601 local observation time
    temperature_c: z.number(),
    apparent_temperature_c: z.number(), // feels-like, °C
    relative_humidity: z.number(), // percent
    wind_speed_kmh: z.number(),
    weather_code: z.number().optional(),
    description: z.string(),
  }),
  daily: z
    .array(
      z.object({
        date: z.string(),
        temp_min_c: z.number(),
        temp_max_c: z.number(),
        precipitation_probability_max: z.number().optional(), // peak precip probability, %
        weather_code: z.number().optional(),
        description: z.string(),
      })
    )
    .optional(),
  attribution: z.string().optional(),
});

export type WeatherResponse = z.infer<typeof WeatherResponseSchema>;

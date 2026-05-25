import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Schemas
import { WeatherResultSchema } from '@repo/schemas';
import { WeatherResponse, WeatherResponseSchema } from '../schemas';

type WeatherToolOutput = z.infer<typeof WeatherResultSchema>;

/**
 * Generate a contextual travel tip based on weather conditions
 */
function generateTravelTip(
  current: WeatherResponse['current'],
  daily?: WeatherResponse['daily']
): string {
  const condition = current.description.toLowerCase();
  const humidity = current.relative_humidity;
  const windSpeed = current.wind_speed_kmh;
  const temp = current.temperature_c;

  // Rain/Precipitation tips
  if (condition.includes('rain') || condition.includes('shower')) {
    const precipChance = daily?.[0]?.precipitation_probability_max || 0;
    if (precipChance > 50) {
      return 'Bring an umbrella — high chance of afternoon rain';
    }
    return 'Pack a light rain jacket for occasional showers';
  }

  // Wind tips
  if (windSpeed > 20) {
    return 'Strong winds today — secure loose items and dress in layers';
  }

  // Heat tips
  if (temp > 35) {
    return 'Very hot — stay hydrated, wear sunscreen, and take breaks in shade';
  }

  // Cold tips
  if (temp < 0) {
    return 'Below freezing — wear warm layers and watch for icy conditions';
  }

  // Humidity tips
  if (humidity > 80 && temp > 25) {
    return 'High humidity and warm — light, breathable clothing recommended';
  }

  // Snow/Frost tips
  if (condition.includes('snow') || condition.includes('sleet')) {
    return 'Snowy conditions — wear waterproof boots and check road conditions';
  }

  // Clear/Sunny tips
  if (condition.includes('clear') || condition.includes('sunny')) {
    return 'Perfect weather — ideal for outdoor exploration and sightseeing';
  }

  // Cloudy/Overcast tips
  if (condition.includes('cloud') || condition.includes('overcast')) {
    return 'Overcast skies — good for walking around without intense sun';
  }

  // Default tip
  return 'Check local conditions before heading out';
}

const getWeather = async (inputData: { city: string; days?: number }) => {
  const { city, days = 5 } = inputData;

  const endpoint = `https://immune-boa-workable.ngrok-free.app/weather`;
  const params = new URLSearchParams({
    city: city.trim(),
    days: String(days),
  });

  try {
    const res = await fetch(`${endpoint}?${params.toString()}`);

    if (!res.ok) {
      throw new Error(`Weather API failed: ${res.status} ${res.statusText}`);
    }

    const raw = await res.json();
    const parsed = WeatherResponseSchema.safeParse(raw);

    if (!parsed.success) {
      throw new Error(`Invalid weather response shape: ${parsed.error.message}`);
    }

    const data = parsed.data;

    // Generate travel tip
    const travelTip = generateTravelTip(data.current, data.daily);

    const result: WeatherToolOutput = {
      location: data.location,
      current: {
        time: data.current.time,
        temperatureC: data.current.temperature_c,
        apparentTemperatureC: data.current.apparent_temperature_c,
        relativeHumidity: data.current.relative_humidity,
        windSpeedKmh: data.current.wind_speed_kmh,
        weatherCode: data.current.weather_code,
        description: data.current.description,
      },
      daily: data.daily?.map((day) => ({
        date: day.date,
        tempMinC: day.temp_min_c,
        tempMaxC: day.temp_max_c,
        precipitationProbabilityMax: day.precipitation_probability_max,
        weatherCode: day.weather_code ?? 0,
        description: day.description,
      })),
      attribution: data.attribution,
      travelTip,
    };

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch weather: ${error.message}`);
    }
    throw new Error('Failed to fetch weather: Unknown error');
  }
};

export const weatherTool = createTool({
  id: 'get-weather',
  description: 'Get current weather conditions and forecast for a destination',
  inputSchema: z.object({
    city: z.string().describe('City name to look up, e.g. "Da Nang" or "Bangkok"'),
    days: z
      .number()
      .int()
      .min(1)
      .max(16)
      .optional()
      .describe('Number of forecast days (1-16), defaults to 5'),
  }),
  outputSchema: WeatherResultSchema,
  execute: async (inputData) => {
    return await getWeather(inputData);
  },
});

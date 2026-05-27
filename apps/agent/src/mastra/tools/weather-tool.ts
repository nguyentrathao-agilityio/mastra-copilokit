import { createTool } from '@mastra/core/tools';
import { OpenAI } from 'openai';
import { z } from 'zod';

// Constants
import { API_URL, ENDPOINTS } from '@/constants';

// Schemas
import { WeatherResultSchema } from '@repo/schemas';
import { WeatherResponse, WeatherResponseSchema } from '@/schemas';
import { openaiClient, OPENAI_CLIENT_MODEL } from '@/utils/openaiClient';

type WeatherToolOutput = z.infer<typeof WeatherResultSchema>;

/**
 * Generate a contextual travel tip based on weather conditions using OPENAI
 */
async function generateTravelTip(
  current: WeatherResponse['current'],
  daily?: WeatherResponse['daily']
): Promise<string> {
  try {
    const weatherSummary = `
      Current conditions:
      - Temperature: ${current.temperature_c}°C (feels like ${current.apparent_temperature_c}°C)
      - Humidity: ${current.relative_humidity}%
      - Wind speed: ${current.wind_speed_kmh} km/h
      - Conditions: ${current.description}

      ${
        daily && daily.length > 0
          ? `Tomorrow's forecast: ${daily[0].description}, high ${daily[0].temp_max_c}°C,
        precipitation chance ${daily[0].precipitation_probability_max}%`
          : ''
      }`;

    const response = await openaiClient.responses.create({
      model: OPENAI_CLIENT_MODEL,
      input: `Generate a single, concise travel tip (max 15 words) for someone traveling in these weather conditions.
        Focus on practical advice like clothing, hydration, or safety. Be direct and actionable. Weather data:\n${weatherSummary}`,
    });

    const tip = response.output_text.trim() || '';
    return tip || 'Check local weather conditions before heading out';
  } catch (error) {
    console.error('Failed to generate AI travel tip:', error);
    return 'Check local weather conditions before heading out';
  }
}

export const getWeather = async (inputData: { city: string; days?: number }) => {
  const { city, days = 5 } = inputData;

  const endpoint = `${API_URL}${ENDPOINTS.WEATHER}`;
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

    // Generate travel tip with OPENAI
    const travelTip = await generateTravelTip(data.current, data.daily);

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

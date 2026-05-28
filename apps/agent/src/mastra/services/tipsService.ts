import { z } from 'zod';

// Constants
import { API_URL, ENDPOINTS } from '@/constants';

// Schemas
import type { TipsResult, TipItem } from '@repo/schemas';
import { TipCategorySchema, TipsInputSchema, ApiTipsResponseSchema } from '@/schemas';
import type { ApiTip } from '@/schemas';

// Utils
import { apiFetch } from '@/utils';
import { openaiClient, OPENAI_CLIENT_MODEL } from '@/utils/openaiClient';

const VALID_CATEGORIES = TipCategorySchema.options;

const LLMTipSchema = z.object({
  id: z.string(),
  category: TipCategorySchema,
  scope: z.enum(['country', 'city']),
  title: z.string(),
  content: z.string(),
  isEssential: z.boolean(),
  location: z.string().optional(),
});

const LLMTipsResponseSchema = z.object({
  tips: z.array(LLMTipSchema),
});

const mapTip = (tip: ApiTip): TipItem => ({
  id: tip.id,
  category: tip.category,
  scope: tip.scope,
  title: tip.title,
  content: tip.content,
  isEssential: tip.is_essential,
  location: tip.location,
});

/**
 * Uses OpenAI to generate structured travel tips when the API returns none.
 */
const generateTipsFromLLM = async (
  city: string | undefined,
  country: string,
  summary: string
): Promise<TipItem[]> => {
  try {
    const location = city ? `${city}, ${country}` : country;

    const response = await openaiClient.responses.create({
      model: OPENAI_CLIENT_MODEL,
      input: `Generate 6 practical travel tips for ${location}.
              Background: ${summary}
              Return ONLY a JSON object with this exact shape:
              {
                "tips": [
                  {
                    "id": "llm-1",
                    "category": "<one of: ${VALID_CATEGORIES.join(', ')}>",
                    "scope": "${city ? 'city' : 'country'}",
                    "title": "<short title, max 8 words>",
                    "content": "<practical tip, 1-2 sentences>",
                    "isEssential": <true or false>,
                    "location": "${city ?? country}"
                  }
                ]
              }
              Cover a variety of categories. Mark 2-3 tips as essential.`,
    });

    const raw = JSON.parse(response.output_text.trim());
    const parsed = LLMTipsResponseSchema.safeParse(raw);

    if (!parsed.success) return [];

    return parsed.data.tips;
  } catch (error) {
    console.error('Failed to generate LLM tips:', error);
    return [];
  }
};

/**
 * Fetches local travel tips for a city or country.
 * Falls back to LLM-generated tips when the API returns none.
 */
export const getLocalTips = async (input: z.infer<typeof TipsInputSchema>): Promise<TipsResult> => {
  const params = Object.fromEntries(
    Object.entries({
      city: input.city,
      country: input.country,
      category: input.category,
      essential_only: input.essential_only ? 'true' : undefined,
    }).filter((entry): entry is [string, string] => !!entry[1])
  );

  const data = await apiFetch(`${API_URL}${ENDPOINTS.TIPS}`, ApiTipsResponseSchema, params);

  const apiTips = data.tips.map(mapTip);

  const tips = apiTips?.length
    ? apiTips
    : await generateTipsFromLLM(data.city, data.country, data.summary);

  return {
    city: data.city,
    country: data.country,
    count: tips.length,
    summary: data.summary,
    tips,
  };
};

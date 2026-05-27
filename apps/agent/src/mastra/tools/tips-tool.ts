import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Constants
import { API_URL, ENDPOINTS } from '@/constants';

// Schemas
import { TipsResultSchema } from '@repo/schemas';
import type { TipsResult, TipItem } from '@repo/schemas';
import { TipsInputSchema, ApiTipsResponseSchema } from '@/schemas';
import type { ApiTip } from '@/schemas';

// Utils
import { apiFetch } from '@/utils';

const mapTip = (tip: ApiTip): TipItem => ({
  id: tip.id,
  category: tip.category,
  scope: tip.scope,
  title: tip.title,
  content: tip.content,
  isEssential: tip.is_essential,
  location: tip.location,
});

const getLocalTips = async (input: z.infer<typeof TipsInputSchema>): Promise<TipsResult> => {
  const params: Record<string, string> = {};

  if (input.city) params.city = input.city;
  if (input.country) params.country = input.country;
  if (input.category) params.category = input.category;
  if (input.essential_only != null) params.essential_only = String(input.essential_only);

  const data = await apiFetch(`${API_URL}${ENDPOINTS.TIPS}`, ApiTipsResponseSchema, params);

  return {
    city: data.city,
    country: data.country,
    count: data.count,
    summary: data.summary,
    tips: data.tips.map(mapTip),
  };
};

export const localTipsTool = createTool({
  id: 'get-local-tips',
  description:
    'Get local travel tips for a city or country — covering transport, money, safety, culture, food, connectivity, health, etiquette, best time to visit, and language. Country-level tips are merged with city-specific ones.',
  inputSchema: TipsInputSchema,
  outputSchema: TipsResultSchema,
  execute: async (input) => getLocalTips(input),
});

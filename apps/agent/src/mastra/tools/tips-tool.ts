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

  return {
    city: data?.city,
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

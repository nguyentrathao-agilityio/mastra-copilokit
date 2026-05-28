import { createTool } from '@mastra/core/tools';

// Services
import { getLocalTips } from '@/services';

// Schemas
import { TipsResultSchema } from '@repo/schemas';
import { TipsInputSchema } from '@/schemas';

export const localTipsTool = createTool({
  id: 'get-local-tips',
  description:
    'Get local travel tips for a city or country — covering transport, money, safety, culture, food, connectivity, health, etiquette, best time to visit, and language. Country-level tips are merged with city-specific ones.',
  inputSchema: TipsInputSchema,
  outputSchema: TipsResultSchema,
  execute: getLocalTips,
});

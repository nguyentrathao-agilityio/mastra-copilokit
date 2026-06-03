import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Services
import { getLocalTips } from '@/services';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

// Schemas
import { TipsResultSchema } from '@repo/schemas';
import { TipsInputSchema, ToolErrorSchema } from '@/schemas';

// Utils
import { AppError } from '@/utils';

// Utils
import { makeToolOutput, TOOL_NO_RESULTS_OUTPUT, TOOL_READY_OUTPUT } from '@/utils';

export const localTipsTool = createTool({
  id: 'get-local-tips',
  description: `Get local travel tips for a city or country — covering transport, money, safety, culture, food, connectivity, health, etiquette, best time to visit, and language.
    Required: country. Optional: city, category, essentialOnly.
    Only call this tool when country is available.`,
  inputSchema: TipsInputSchema,
  outputSchema: TipsResultSchema.or(ToolErrorSchema),
  execute: async (inputData) => {
    try {
      return await getLocalTips(inputData);
    } catch (error) {
      return {
        error: error instanceof AppError ? error.message : TOOL_ERROR_MESSAGES.LOCAL_TIPS,
      };
    }
  },
  toModelOutput: (output) =>
    'error' in output || output.count === 0 ? TOOL_NO_RESULTS_OUTPUT : TOOL_READY_OUTPUT,
});

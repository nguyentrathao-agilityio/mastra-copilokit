import { createTool } from '@mastra/core/tools';

// Schemas
import { TripSummaryResultSchema } from '@repo/schemas';
import { ToolErrorSchema, TripSummaryInputSchema } from '@/schemas';

// Workflow
import { tripSummaryWorkflow } from '@/workflows';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

// Utils
import { AppError } from '@/utils';

export const tripSummaryTool = createTool({
  id: 'trip-summary',
  description:
    'Generate a full trip summary for a destination — best flight option, best hotel option, suggested route, and estimated total cost. Always call confirmTripSummary before this tool.',
  inputSchema: TripSummaryInputSchema,
  outputSchema: TripSummaryResultSchema.or(ToolErrorSchema),
  execute: async (input) => {
    try {
      const run = await tripSummaryWorkflow.createRun();
      const result = await run.start({ inputData: input });

      if (result.status !== 'success') {
        return { error: TOOL_ERROR_MESSAGES.TRIP_SUMMARY };
      }

      return result.result;
    } catch (error) {
      return {
        error: error instanceof AppError ? error.message : TOOL_ERROR_MESSAGES.TRIP_SUMMARY,
      };
    }
  },
});

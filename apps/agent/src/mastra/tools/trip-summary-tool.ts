import { createTool } from '@mastra/core/tools';

// Schemas
import { TripSummaryResultSchema } from '@repo/schemas';
import { TripSummaryInputSchema } from '@/schemas';

// Workflow
import { tripSummaryWorkflow } from '@/workflows';

/**
 * Agent-callable tool that executes the full trip summary workflow.
 * Returns a single TripSummaryResult covering flight suggestion,
 * hotel suggestion, top places, local tips, route, and cost estimate.
 *
 * Pass skipFlights=true / skipHotel=true when the user already has
 * confirmed bookings in state — the workflow will skip those API calls.
 */
export const tripSummaryTool = createTool({
  id: 'trip-summary',
  description:
    'Generate a full trip summary for a destination — best flight option, best hotel option, suggested route, and estimated total cost. Always call confirmTripSummary before this tool.',
  inputSchema: TripSummaryInputSchema,
  outputSchema: TripSummaryResultSchema,
  execute: async (input) => {
    const run = await tripSummaryWorkflow.createRun();
    const result = await run.start({ inputData: input });

    if (result.status !== 'success') {
      throw new Error(`Trip summary workflow failed: ${result.status}`);
    }

    return result.result;
  },
});

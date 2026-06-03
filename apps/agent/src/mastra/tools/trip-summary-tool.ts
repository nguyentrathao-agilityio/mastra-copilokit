import { createTool } from '@mastra/core/tools';

// Schemas
import { TripSummaryResultSchema } from '@repo/schemas';
import { ToolErrorSchema, TripSummaryInputSchema } from '@/schemas';

// Utils
import { AppError } from '@/utils';
import { makeToolOutput, TOOL_ERROR_OUTPUT, TOOL_READY_OUTPUT } from '@/utils';

// Workflow
import { tripSummaryWorkflow } from '@/workflows';

// Constants
import { TOOL_ERROR_MESSAGES } from '@/constants';

export const tripSummaryTool = createTool({
  id: 'trip-summary',
  description: `Generate a full trip summary — flights, hotel, route, and cost estimate in one unified result.
    Use this as the SINGLE entry point for any full trip / itinerary / trip plan request.
    Do NOT call flights, hotel, route, or weather tools separately before or after this.
    Required: destination (English, no diacritics — e.g. "Da Nang" not "Đà Nẵng").
    Optional: startDate (YYYY-MM-DD), endDate (YYYY-MM-DD), travelers, flightOrigin (IATA code), skipFlights, skipHotel.`,
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
  toModelOutput: (output) => {
    if (!output || 'error' in output) return TOOL_ERROR_OUTPUT;
    if (!output.destination) {
      return makeToolOutput(
        'Trip summary could not be generated. Tell the user, then ask for: destination city, travel dates (start and end), and number of travelers.'
      );
    }
    return TOOL_READY_OUTPUT;
  },
});

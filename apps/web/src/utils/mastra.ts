import { z } from 'zod';

// Constants
import { TOOLS } from '@/constants';

// Schemas
import {
  MessageContentSchema,
  RawMastraMessageSchema,
  TextPartSchema,
  ToolInvocationPartSchema,
} from '@/schemas';

// Types
import type { ToolResult } from '@/types';
import type { WeatherResult, FlightSearchResult } from '@repo/types';

export type RawMastraMessage = z.infer<typeof RawMastraMessageSchema>;

/**
 * Extracts text content from a Mastra message.
 */
export const extractContent = (raw: z.infer<typeof MessageContentSchema>): string => {
  if (typeof raw === 'string') return raw;

  if (raw.content) return raw.content;

  if (raw.parts) {
    return raw.parts
      .filter((p): p is z.infer<typeof TextPartSchema> => p.type === 'text')
      .map((p) => p.text)
      .join('');
  }

  return '';
};

/**
 * Extracts a tool result from a Mastra message if present.
 * Handles weather and flight tool invocations stored in message parts.
 */
export const extractToolResult = (
  raw: z.infer<typeof MessageContentSchema>
): ToolResult | undefined => {
  if (typeof raw === 'string') return undefined;
  if (!raw.parts) return undefined;

  const toolPart = raw.parts.find(
    (p): p is z.infer<typeof ToolInvocationPartSchema> =>
      p.type === 'tool-invocation' && p.toolInvocation.state === 'result'
  );

  if (!toolPart) return undefined;

  const { toolName, result, args } = toolPart.toolInvocation;

  if (toolName === TOOLS.WEATHER) {
    return {
      toolName: TOOLS.WEATHER,
      result: result as WeatherResult,
    };
  }

  if (toolName === TOOLS.FLIGHT) {
    return {
      toolName: TOOLS.FLIGHT,
      result: result as FlightSearchResult,
      args: {
        origin: (args.origin as string) ?? '',
        destination: (args.destination as string) ?? '',
        departureDate: (args.departure_date as string) ?? '',
      },
    };
  }

  return undefined;
};

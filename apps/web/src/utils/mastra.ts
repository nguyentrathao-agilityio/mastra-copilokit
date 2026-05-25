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
import { ToolResult } from '@/types';
import type { WeatherResult } from '@repo/types';

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
 * Extracts weather tool result from a Mastra message if present.
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

  if (toolPart.toolInvocation.toolName === TOOLS.WEATHER) {
    return {
      toolName: TOOLS.WEATHER,
      result: toolPart.toolInvocation.result as WeatherResult,
    };
  }

  return undefined;
};

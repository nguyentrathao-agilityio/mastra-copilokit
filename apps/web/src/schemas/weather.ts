import { z } from 'zod';

export const TextPartSchema = z.object({
  type: z.literal('text'),
  text: z.string(),
  createdAt: z.number().optional(),
  providerMetadata: z.record(z.unknown()).optional(),
});

export const ToolInvocationPartSchema = z.object({
  type: z.literal('tool-invocation'),
  toolInvocation: z.object({
    state: z.string(),
    toolCallId: z.string(),
    toolName: z.string(),
    args: z.record(z.unknown()),
    // shape varies per tool — narrowed downstream via toolName
    result: z.unknown(),
  }),
  providerMetadata: z.record(z.unknown()).optional(),
});

const StepStartPartSchema = z.object({
  type: z.literal('step-start'),
  createdAt: z.number().optional(),
  model: z.string().optional(),
});

const MessagePartSchema = z.discriminatedUnion('type', [
  TextPartSchema,
  ToolInvocationPartSchema,
  StepStartPartSchema,
]);

export const MessageContentSchema = z.union([
  z.string(),
  z.object({
    format: z.number().optional(),
    parts: z.array(MessagePartSchema),
    content: z.string().optional(),
    metadata: z.record(z.unknown()).optional(),
  }),
]);

export const RawMastraMessageSchema = z.object({
  id: z.string(),
  role: z.string(),
  createdAt: z.string().optional(),
  threadId: z.string().optional(),
  resourceId: z.string().optional(),
  content: MessageContentSchema,
});

import { z } from 'zod';

export const RawMastraMessageSchema = z
  .object({
    id: z.string(),
    role: z.string(),
    createdAt: z.string().optional(),
    content: z.union([
      z.string(),
      z
        .object({
          content: z.string().optional(),
          parts: z.array(z.object({ type: z.string(), text: z.string() })).optional(),
        })
        .passthrough(),
    ]),
  })
  .passthrough();

/**
 * Extracts the text content from a raw Mastra message,
 * handling different possible content formats (string, object with content, or object with parts).
 * @param raw The raw content of a Mastra message, which can be a string or an object with various structures.
 * @returns The extracted text content from the message, or an empty string if no valid content is found.
 */
export const extractContent = (raw: z.infer<typeof RawMastraMessageSchema>['content']): string => {
  if (typeof raw === 'string') {
    return raw;
  }

  if (typeof raw?.content === 'string') {
    return raw.content;
  }

  if (Array.isArray(raw?.parts)) {
    return raw.parts
      .filter((p) => p.type === 'text')
      .map((p) => p.text)
      .join('');
  }

  return '';
};

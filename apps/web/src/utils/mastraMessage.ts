import type { MastraTextPart, MastraMessageContent, MastraToolInvocationPart } from '@/types';

export const extractText = (content: MastraMessageContent | string): string => {
  if (typeof content === 'string') return content;

  const fromParts = content.parts
    ?.filter(
      (part): part is MastraTextPart => part.type === 'text' && 'text' in part && !!part.text
    )
    .map((part) => part.text)
    .join('');

  return fromParts || content.content || '';
};

export const extractToolInvocations = (
  content: MastraMessageContent | string
): MastraToolInvocationPart['toolInvocation'][] => {
  if (typeof content === 'string') return [];
  return (content.parts ?? [])
    .filter((part): part is MastraToolInvocationPart => part.type === 'tool-invocation')
    .map((part) => part.toolInvocation);
};

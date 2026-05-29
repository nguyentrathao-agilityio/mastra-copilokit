import type { MastraTextPart, MastraMessageContent, MastraToolInvocationPart } from '@/types';

export const extractText = (content: unknown): string => {
  const msgContent = content as MastraMessageContent;
  const fromParts = msgContent.parts
    ?.filter(
      (part): part is MastraTextPart => part.type === 'text' && !!(part as MastraTextPart).text
    )
    .map((part) => part.text)
    .join('');
  if (fromParts) return fromParts;
  if (typeof msgContent.content === 'string') return msgContent.content;
  if (typeof content === 'string') return content;

  return '';
};

export const extractToolInvocations = (
  content: unknown
): MastraToolInvocationPart['toolInvocation'][] => {
  const msgContent = content as MastraMessageContent;
  return (msgContent.parts ?? [])
    .filter((part): part is MastraToolInvocationPart => part.type === 'tool-invocation')
    .map((part) => part.toolInvocation);
};

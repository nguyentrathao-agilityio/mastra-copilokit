export const ONE_DAY_MS = 86_400_000;

export type DateGroupKey = 'today' | 'yesterday' | 'older';

export const DATE_GROUP_KEYS: DateGroupKey[] = ['today', 'yesterday', 'older'];

export const DATE_GROUP_LABELS: Record<DateGroupKey, string> = {
  today: 'Today',
  yesterday: 'Yesterday',
  older: 'Older',
};

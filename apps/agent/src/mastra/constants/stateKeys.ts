export const STATE_KEYS = ['flights', 'hotels'] as const;
export type StateKey = (typeof STATE_KEYS)[number];

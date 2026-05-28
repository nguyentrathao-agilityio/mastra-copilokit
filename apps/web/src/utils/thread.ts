import type { DateGroupKey } from '@/constants';

type ThreadItem = { id: string; title: string | null; createdAt: string };

export type ThreadGroups = Record<DateGroupKey, ThreadItem[]>;

export const groupThreadsByDate = (threads: ThreadItem[]): ThreadGroups => {
  const now = new Date();
  const groups: ThreadGroups = { today: [], yesterday: [], older: [] };

  for (const t of threads) {
    const diff = Math.floor((now.getTime() - new Date(t.createdAt).getTime()) / 86_400_000);
    if (diff === 0) groups.today.push(t);
    else if (diff === 1) groups.yesterday.push(t);
    else groups.older.push(t);
  }

  return groups;
};

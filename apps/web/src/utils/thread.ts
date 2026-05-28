import type { DateGroupKey } from '@/constants';
import { ONE_DAY_MS } from '@/constants';
import type { ThreadItem } from '@/stores/threadStore';

export type ThreadGroups = Record<DateGroupKey, ThreadItem[]>;

export const groupThreadsByDate = (threads: ThreadItem[]): ThreadGroups => {
  const now = Date.now();

  const groups: ThreadGroups = {
    today: [],
    yesterday: [],
    older: [],
  };

  for (const thread of threads) {
    const createdAt = new Date(thread.createdAt).getTime();
    const diffInDays = Math.floor((now - createdAt) / ONE_DAY_MS);

    if (diffInDays === 0) {
      groups.today.push(thread);
      continue;
    }

    if (diffInDays === 1) {
      groups.yesterday.push(thread);
      continue;
    }

    groups.older.push(thread);
  }

  return groups;
};

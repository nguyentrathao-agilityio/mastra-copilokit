import { groupThreadsByDate } from '@/utils/thread';
import type { ThreadItem } from '@/stores/threadStore';

jest.mock('@/constants', () => ({
  ONE_DAY_MS: 86_400_000,
}));

const ONE_DAY_MS = 86_400_000;

const makeThread = (overrides: Partial<ThreadItem> = {}): ThreadItem => ({
  id: 'thread-1',
  title: 'Test Thread',
  createdAt: new Date().toISOString(),
  resourceId: 'resource-1',
  ...overrides,
});

describe('groupThreadsByDate', () => {
  it('places a thread created today in the today group', () => {
    const thread = makeThread({ createdAt: new Date().toISOString() });
    const groups = groupThreadsByDate([thread]);
    expect(groups.today).toHaveLength(1);
    expect(groups.yesterday).toHaveLength(0);
    expect(groups.older).toHaveLength(0);
  });

  it('places a thread created yesterday in the yesterday group', () => {
    const yesterday = new Date(Date.now() - ONE_DAY_MS).toISOString();
    const thread = makeThread({ createdAt: yesterday });
    const groups = groupThreadsByDate([thread]);
    expect(groups.yesterday).toHaveLength(1);
    expect(groups.today).toHaveLength(0);
  });

  it('places a thread older than yesterday in the older group', () => {
    const twoDaysAgo = new Date(Date.now() - 2 * ONE_DAY_MS).toISOString();
    const thread = makeThread({ createdAt: twoDaysAgo });
    const groups = groupThreadsByDate([thread]);
    expect(groups.older).toHaveLength(1);
  });

  it('returns all empty groups for an empty array', () => {
    const groups = groupThreadsByDate([]);
    expect(groups.today).toHaveLength(0);
    expect(groups.yesterday).toHaveLength(0);
    expect(groups.older).toHaveLength(0);
  });

  it('distributes multiple threads into correct groups', () => {
    const threads = [
      makeThread({ id: '1', createdAt: new Date().toISOString() }),
      makeThread({ id: '2', createdAt: new Date(Date.now() - ONE_DAY_MS).toISOString() }),
      makeThread({ id: '3', createdAt: new Date(Date.now() - 3 * ONE_DAY_MS).toISOString() }),
      makeThread({ id: '4', createdAt: new Date(Date.now() - 5 * ONE_DAY_MS).toISOString() }),
    ];
    const groups = groupThreadsByDate(threads);
    expect(groups.today).toHaveLength(1);
    expect(groups.yesterday).toHaveLength(1);
    expect(groups.older).toHaveLength(2);
  });
});

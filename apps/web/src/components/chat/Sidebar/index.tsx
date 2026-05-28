import { useState, useCallback, useMemo } from 'react';
import { Plus, PanelLeftClose, PanelLeftOpen, Loader2 } from 'lucide-react';

import { useThreads } from '@/hooks';
import { cn, groupThreadsByDate } from '@/utils';
import { Button, Typography } from '@/components/common';
import { ThreadItem } from './ThreadItem';
import { CollapsedThreadButton } from './CollapsedThreadButton';
import { DATE_GROUP_KEYS, DATE_GROUP_LABELS } from '@/constants';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { threads, loading, creating, activeThreadId, createThread, deleteThread, selectThread } =
    useThreads();

  const groups = useMemo(() => groupThreadsByDate(threads), [threads]);

  const handleToggleCollapsed = useCallback(() => setCollapsed((c) => !c), []);

  return (
    <aside
      className={cn(
        'bg-background-primary border-border-secondary relative flex flex-col border-r transition-[width] duration-200',
        collapsed ? 'w-14' : 'w-64'
      )}
    >
      {/* Top bar */}
      <div className="flex h-14 shrink-0 items-center justify-between px-3">
        {!collapsed && (
          <Typography variant="body" weight="medium" as="span">
            Conversations
          </Typography>
        )}
        <Button
          variant="ghost"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={handleToggleCollapsed}
          className={cn('p-1.5', collapsed && 'mx-auto')}
        >
          {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
        </Button>
      </div>

      {/* New chat */}
      <div className={cn('px-3 pb-3', collapsed && 'px-2')}>
        {collapsed ? (
          <Button
            variant="brand"
            aria-label="New chat"
            onClick={createThread}
            disabled={creating}
            className="h-9 w-full rounded-lg p-0"
          >
            {creating ? <Loader2 size={15} className="animate-spin" /> : <Plus size={15} />}
          </Button>
        ) : (
          <Button
            variant="brand"
            onClick={createThread}
            disabled={creating}
            className="w-full gap-2 rounded-lg px-3 py-2"
            leftIcon={
              creating ? (
                <Loader2 size={14} className="shrink-0 animate-spin" />
              ) : (
                <Plus size={14} className="shrink-0" />
              )
            }
          >
            New chat
          </Button>
        )}
      </div>

      {/* Thread list */}
      <div className="flex-1 overflow-y-auto">
        {loading && !threads.length && !collapsed && (
          <div className="space-y-1 px-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background-secondary h-8 animate-pulse rounded-lg" />
            ))}
          </div>
        )}

        {!collapsed &&
          DATE_GROUP_KEYS.map((key) => {
            const items = groups[key];
            if (!items.length) return null;
            return (
              <div key={key} className="mb-2">
                <Typography
                  variant="label"
                  weight="medium"
                  color="tertiary"
                  className="block px-4 py-1.5 uppercase tracking-wide"
                >
                  {DATE_GROUP_LABELS[key]}
                </Typography>
                {items.map((thread) => (
                  <ThreadItem
                    key={thread.id}
                    id={thread.id}
                    title={thread.title ?? 'New chat'}
                    isActive={thread.id === activeThreadId}
                    onSelect={selectThread}
                    onDelete={deleteThread}
                  />
                ))}
              </div>
            );
          })}

        {collapsed &&
          threads.map((thread) => (
            <CollapsedThreadButton
              key={thread.id}
              id={thread.id}
              title={thread.title ?? 'New chat'}
              isActive={thread.id === activeThreadId}
              onSelect={selectThread}
            />
          ))}
      </div>
    </aside>
  );
};

import { Loader2, PanelLeftClose, PanelLeftOpen, Plane, Plus } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useShallow } from 'zustand/shallow';

import { Button } from '@/components';
import { CollapsedThreadButton } from './CollapsedThreadButton';
import { ThreadItem } from './ThreadItem';

import {
  DATE_GROUP_KEYS,
  DATE_GROUP_LABELS,
  SIDEBAR_NEW_CHAT_FALLBACK,
  SIDEBAR_SHORTCUT_KEY,
  SIDEBAR_WIDTH_COLLAPSED,
  SIDEBAR_WIDTH_EXPANDED,
} from '@/constants';
import { useThreadStore } from '@/stores';
import { cn, groupThreadsByDate } from '@/utils';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    activeThreadId,
    threads,
    isLoading,
    isCreating,
    fetchThreads,
    createThread,
    deleteThread,
    selectThread,
  } = useThreadStore(
    useShallow((state) => ({
      activeThreadId: state.activeThreadId,
      threads: state.threads,
      isLoading: state.isLoading,
      isCreating: state.isCreating,
      fetchThreads: state.fetchThreads,
      createThread: state.createThread,
      deleteThread: state.deleteThread,
      selectThread: state.selectThread,
    }))
  );

  const groups = useMemo(() => groupThreadsByDate(threads), [threads]);
  const handleToggleCollapsed = useCallback(() => setCollapsed((v) => !v), []);

  useEffect(() => {
    fetchThreads();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === SIDEBAR_SHORTCUT_KEY) {
        e.preventDefault();
        createThread();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [createThread]);

  return (
    <aside
      className={cn(
        'bg-sidebar-bg border-sidebar-border relative flex flex-col border-r transition-[width] duration-200',
        collapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH_EXPANDED
      )}
    >
      {/* Brand header */}
      <div
        className={cn(
          'flex h-16 shrink-0 items-center px-3',
          collapsed ? 'justify-center' : 'justify-between'
        )}
      >
        <Button
          variant="ghost"
          onClick={collapsed ? handleToggleCollapsed : undefined}
          aria-label={collapsed ? 'Expand sidebar' : undefined}
          className={cn(
            'bg-brand-500 group h-8 w-8 shrink-0 rounded-lg p-0',
            !collapsed && 'pointer-events-none cursor-default'
          )}
        >
          <Plane size={15} className={cn('text-white', collapsed && 'group-hover:hidden')} />
          {collapsed && <PanelLeftOpen size={15} className="hidden text-white group-hover:block" />}
        </Button>
        {!collapsed && (
          <Button
            variant="ghost"
            aria-label="Collapse sidebar"
            onClick={handleToggleCollapsed}
            className="text-sidebar-text-muted hover:text-sidebar-text p-1.5 hover:bg-transparent"
          >
            <PanelLeftClose size={15} />
          </Button>
        )}
      </div>

      {/* Thread list */}
      <div
        className={cn(
          'scrollbar-none flex-1 overflow-y-auto',
          collapsed && 'flex flex-col items-center'
        )}
      >
        {isLoading && !threads.length && !collapsed && (
          <div className="space-y-1 px-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-sidebar-item-active h-8 animate-pulse rounded-lg opacity-60"
              />
            ))}
          </div>
        )}

        {!collapsed &&
          DATE_GROUP_KEYS.map((key) => {
            const items = groups[key];
            if (!items.length) return null;

            return (
              <div key={key} className="mb-2">
                <p className="text-sidebar-label text-label block px-4 py-1.5 font-medium uppercase tracking-widest">
                  {DATE_GROUP_LABELS[key]}
                </p>
                {items.map((thread) => (
                  <ThreadItem
                    key={thread.id}
                    id={thread.id}
                    title={thread?.title}
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
              title={thread?.title ?? SIDEBAR_NEW_CHAT_FALLBACK}
              isActive={thread.id === activeThreadId}
              onSelect={selectThread}
            />
          ))}
      </div>

      {/* New conversation button + keyboard hint — pinned to bottom */}
      <div className={cn('p-3', collapsed && 'px-2')}>
        {collapsed ? (
          <Button
            variant="brand"
            aria-label="New conversation"
            onClick={createThread}
            disabled={isCreating}
            className="h-9 w-full rounded-lg p-0"
          >
            {isCreating ? <Loader2 size={15} className="animate-spin" /> : <Plus size={15} />}
          </Button>
        ) : (
          <Button
            variant="brand"
            onClick={createThread}
            disabled={isCreating}
            className="w-full gap-2 rounded-lg px-3 py-2.5"
            leftIcon={
              isCreating ? (
                <Loader2 size={14} className="shrink-0 animate-spin" />
              ) : (
                <Plus size={14} className="shrink-0" />
              )
            }
          >
            New conversation
          </Button>
        )}
      </div>
    </aside>
  );
};

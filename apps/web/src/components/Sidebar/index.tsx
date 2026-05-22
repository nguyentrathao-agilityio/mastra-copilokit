import { Plane } from 'lucide-react';
import { ThreadList } from '../ThreadList';

export const Sidebar = () => {
  return (
    <aside className="border-border-tertiary bg-background-primary flex w-64 shrink-0 flex-col border-r">
      {/* Logo */}
      <div className="border-border-tertiary flex items-center gap-2.5 border-b px-4 py-4">
        <div className="bg-brand-500 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
          <Plane size={16} className="text-white" />
        </div>
        <div>
          <p className="text-body text-text-primary font-medium">Travel planner</p>
          <p className="text-meta font-regular text-text-tertiary">Powered by AI</p>
        </div>
      </div>

      {/* Conversation history */}
      <div className="scrollbar-thin flex flex-1 flex-col overflow-hidden overflow-y-auto px-3 py-3">
        <ThreadList />
      </div>
    </aside>
  );
};

import { History, Plane } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2.5 border-b border-gray-200 px-4 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white">
          <Plane size={16} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Travel Planner</p>
          <p className="text-xs text-gray-400">Powered by AI</p>
        </div>
      </div>

      {/* Conversation History */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        <p className="flex items-center gap-1.5 px-1 py-2 text-xs font-medium uppercase tracking-wider text-gray-400">
          <History size={12} />
          History
        </p>
      </div>
    </aside>
  );
};

import { CopilotChat } from '@copilotkit/react-ui';
import { Plane, Wifi } from 'lucide-react';

export const TravelChat = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
        <div className="flex items-center gap-2.5">
          <Plane size={18} className="text-blue-500" />
          <div>
            <h1 className="text-sm font-semibold text-gray-900">Travel Assistant</h1>
            <p className="text-xs text-gray-400">Ask me anything about your trip</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
          <Wifi size={12} />
          Online
        </span>
      </header>
      <div className="flex-1 overflow-hidden">
        <CopilotChat
          className="h-full"
          instructions="You are a helpful travel planning assistant. Help users plan trips, suggest destinations, create itineraries, and provide travel tips."
          labels={{
            title: 'Travel Assistant',
            initial: "Hi! I'm your travel planning assistant. Where would you like to go?",
            placeholder: 'Ask about destinations, itineraries, tips...',
          }}
        />
      </div>
    </div>
  );
};

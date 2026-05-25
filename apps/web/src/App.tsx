import { Sidebar } from '@/components';
import { TravelChat } from '@/components/chat/TravelChat';
import { Providers } from './app/providers';

const App = () => (
  <Providers>
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-hidden">
        <TravelChat />
      </main>
    </div>
  </Providers>
);

export { App };

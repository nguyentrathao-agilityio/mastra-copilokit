import { TravelChat } from '@/components/chat/TravelChat';
import { Providers } from './app/providers';

const App = () => (
  <Providers>
    <div className="bg-background-secondary flex h-screen overflow-hidden">
      <main className="flex flex-1 flex-col overflow-hidden">
        <TravelChat />
      </main>
    </div>
  </Providers>
);

export { App };

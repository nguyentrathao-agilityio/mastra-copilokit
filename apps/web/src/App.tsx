import { TravelChat, Sidebar } from '@/components';
import { Providers } from './app/providers';

const App = () => (
  <div className="bg-background-primary flex h-screen overflow-hidden">
    <Sidebar />
    <Providers>
      <main className="flex flex-1 flex-col overflow-hidden">
        <TravelChat />
      </main>
    </Providers>
  </div>
);

export { App };

import { TravelChat, Sidebar, ApiKeyOverlay, ThemeToggle } from '@/components';
import { Providers } from './app/providers';
import { useApiKeyStore } from '@/stores';

const App = () => {
  const apiKey = useApiKeyStore((state) => state.apiKey);

  if (!apiKey) {
    return (
      <div className="bg-background-primary flex h-screen overflow-hidden">
        <ApiKeyOverlay />
      </div>
    );
  }

  return (
    <div className="bg-background-primary flex h-screen overflow-hidden">
      <Sidebar />
      <Providers>
        <main className="flex flex-1 flex-col overflow-hidden">
          <div className="absolute right-4 top-4">
            <ThemeToggle />
          </div>
          <TravelChat />
        </main>
      </Providers>
    </div>
  );
};

export { App };

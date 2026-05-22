import { Sidebar, TravelChat } from '@/components';

const HomePage = () => (
  <div className="flex h-screen overflow-hidden bg-gray-50">
    <Sidebar />
    <main className="flex flex-1 flex-col overflow-hidden">
      <TravelChat />
    </main>
  </div>
);

export default HomePage;

import { Sidebar } from '@/components/sidebar/Sidebar';
import { TravelChat } from '@/components/chat/TravelChat';

const HomePage = () => (
  <div className="flex h-screen overflow-hidden bg-gray-50">
    <Sidebar />
    <main className="flex flex-1 flex-col overflow-hidden">
      <TravelChat />
    </main>
  </div>
);

export default HomePage;

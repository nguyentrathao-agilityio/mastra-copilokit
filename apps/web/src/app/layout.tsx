import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@copilotkit/react-ui/styles.css';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Travel Planner Assistant',
    template: '%s | Travel Planner',
  },
  description:
    'AI-powered travel planning assistant. Plan your perfect trip with personalized itineraries, destination recommendations, and real-time travel insights.',
  keywords: ['travel', 'AI', 'itinerary', 'trip planner', 'travel assistant'],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={inter.variable}>
    <body className="min-h-screen">
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;

import { Bike, Bus, Car, Footprints, LucideIcon } from 'lucide-react';

// Types
import type { TransportMode } from '@repo/types';

export const TRANSPORT_MAP: Record<TransportMode, { icon: LucideIcon; label: string }> = {
  walking: { icon: Footprints, label: 'Walking' },
  motorbike: { icon: Bike, label: 'Motorbike' },
  taxi: { icon: Car, label: 'Taxi' },
  bus: { icon: Bus, label: 'Bus' },
};

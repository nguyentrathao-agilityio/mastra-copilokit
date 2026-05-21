import { Bike, Bus, Car, Footprints, Plane, Train, type LucideIcon } from 'lucide-react';

// Types
import type { TipCategory, TravelTransport } from '@repo/types';

export const TRAVEL_TRANSPORT = {
  WALK: 'walk',
  MOTORBIKE: 'motorbike',
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  FLIGHT: 'flight',
  DRIVE: 'drive',
} as const satisfies Record<string, TravelTransport>;

export const TRAVEL_TRANSPORT_MAP: Record<TravelTransport, { icon: LucideIcon; label: string }> = {
  walk: { icon: Footprints, label: 'Walk' },
  motorbike: { icon: Bike, label: 'Motorbike' },
  taxi: { icon: Car, label: 'Taxi' },
  bus: { icon: Bus, label: 'Bus' },
  train: { icon: Train, label: 'Train' },
  flight: { icon: Plane, label: 'Flight' },
  drive: { icon: Car, label: 'Drive' },
};

export const TIP_CATEGORY_CLASS_MAP: Record<TipCategory, string> = {
  transport: 'bg-blue-50   text-blue-800   border border-blue-200',
  money: 'bg-amber-50  text-amber-800  border border-amber-200',
  safety: 'bg-green-50  text-green-800  border border-green-200',
  culture: 'bg-purple-50 text-purple-800 border border-purple-200',
  food: 'bg-red-50    text-red-800    border border-red-200',
  connectivity: 'bg-teal-50   text-teal-800   border border-teal-200',
  health: 'bg-pink-50   text-pink-800   border border-pink-200',
  etiquette: 'bg-gray-50   text-gray-800   border border-gray-200',
  best_time: 'bg-amber-50  text-amber-700  border border-amber-200',
  language: 'bg-violet-50 text-violet-800 border border-violet-200',
};

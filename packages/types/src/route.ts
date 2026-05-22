export interface RoutePayload {
  origin: string;
  destination: string;
}

export interface RouteEndpoint {
  kind: string;
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface RouteLeg {
  mode: string;
  profile: string;
  distanceKm: number;
  durationMinutes: number;
}

export interface RouteResponse {
  origin: RouteEndpoint;
  destination: RouteEndpoint;
  straightLineKm: number;
  recommendedMode: string;
  legs: RouteLeg[];
  source: string;
  attribution: string;
}

export type TravelTransport = 'walk' | 'motorbike' | 'taxi' | 'bus' | 'train' | 'flight' | 'drive';

export interface TravelLeg {
  transport: TravelTransport;
  durationMin: number;
  distanceKm?: number;
}

export interface LandmarkStop {
  name: string;
  city: string;
  description?: string;
  visitDurationMin?: number;
  openingHours?: string;
  entranceFee?: number;
  lat?: number;
  lng?: number;
}

export interface TourLeg {
  mode: TravelTransport;
  durationMin: number;
  distanceKm: number;
}

export interface LandmarkTourRoute {
  city: string;
  totalDurationMin: number;
  stops: LandmarkStop[];
  legs: TourLeg[];
}

export interface LandmarkTourPayload {
  query: string;
  maxStops?: number;
  preferredTransport?: TravelTransport;
}

export type TipCategory =
  | 'transport'
  | 'money'
  | 'safety'
  | 'culture'
  | 'food'
  | 'connectivity'
  | 'health'
  | 'etiquette'
  | 'best_time'
  | 'language';

export interface Tip {
  id: string;
  category: TipCategory;
  scope: 'country' | 'city';
  title: string;
  content: string;
  isEssential: boolean;
  location?: string;
}

export interface TipsResult {
  city?: string;
  country: string;
  count: number;
  summary: string;
  tips: Tip[];
}

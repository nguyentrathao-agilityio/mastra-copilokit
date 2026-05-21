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
  distance_km: number;
  duration_minutes: number;
}

export interface RouteResponse {
  origin: RouteEndpoint;
  destination: RouteEndpoint;
  straight_line_km: number;
  recommended_mode: string;
  legs: RouteLeg[];
  source: string;
  attribution: string;
}

export type TransportMode = 'walking' | 'motorbike' | 'taxi' | 'bus';

export interface LandmarkStop {
  name: string;
  description: string;
  visitDurationMin: number;
  openingHours: string;
  entranceFee: string;
}

export interface TourLeg {
  mode: TransportMode;
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
}

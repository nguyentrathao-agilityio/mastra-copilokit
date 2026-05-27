import { Flight } from './flight';
import { Hotel } from './hotel';

export interface SelectedFlight {
  departure?: Flight;
  return?: Flight;
}

export interface TripState {
  flights?: SelectedFlight;
  hotel?: Hotel;
  itineraryActive?: boolean;
  destination?: string;
  startDate?: string;
  endDate?: string;
  travelers?: number;
}

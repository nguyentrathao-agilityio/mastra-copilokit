import { Flight } from './flight';
import { Hotel } from './hotel';

export interface SelectedFlight {
  departure?: Flight;
  return?: Flight;
}

export interface TripState {
  flights?: SelectedFlight;
  hotels?: Hotel;
}

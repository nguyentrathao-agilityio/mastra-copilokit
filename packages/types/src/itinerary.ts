export interface ItineraryFlight {
  airline: string;
  flightNumber?: string;
  departureCity: string;
  arrivalCity: string;
  departureTime?: string;
  arrivalTime?: string;
  price?: number;
  currency?: string;
}

export interface ItineraryHotel {
  name: string;
  checkIn: string;
  checkOut: string;
  pricePerNight?: number;
  currency?: string;
  rating?: number;
  address?: string;
}

export interface ItineraryActivity {
  time?: string;
  name: string;
  description?: string;
  duration?: string;
  location?: string;
  category?: string;
}

export interface ItineraryMeal {
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  suggestion: string;
  restaurant?: string;
  cuisine?: string;
  notes?: string;
}

export interface ItineraryDay {
  day: number;
  date?: string;
  title: string;
  summary?: string;
  activities: ItineraryActivity[];
  meals: ItineraryMeal[];
  localTips?: string[];
  notes?: string;
}

export interface ItineraryResult {
  destination: string;
  country?: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  travelers: number;
  flight?: ItineraryFlight;
  hotel?: ItineraryHotel;
  days: ItineraryDay[];
  generalTips?: string[];
  notes?: string;
}

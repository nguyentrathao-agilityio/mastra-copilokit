import {
  Building2,
  Cloud,
  Compass,
  Lightbulb,
  MapPin,
  Plane,
  Route,
  UtensilsCrossed,
} from 'lucide-react';
import type { SuggestionItem } from './chat';

export const TOOL_NAMES = {
  WEATHER: 'weatherTool',
  FLIGHTS: 'flightsTool',
  HOTEL: 'hotelTool',
  LOCAL_TIPS: 'localTipsTool',
  PLACES: 'placesTool',
  ROUTE: 'routeTool',
  TRIP_SUMMARY: 'tripSummaryTool',
  DESTINATION_EXPLORER: 'destinationExplorerTool',
} as const;

export const TOOL_SUGGESTION_ITEMS: Readonly<Partial<Record<string, readonly SuggestionItem[]>>> = {
  [TOOL_NAMES.FLIGHTS]: [
    {
      icon: Building2,
      title: 'Show hotels',
      description: 'Find hotels at destination',
      message: 'Show hotels',
    },
    {
      icon: Cloud,
      title: 'Check weather',
      description: 'Check the weather forecast',
      message: 'Check the weather',
    },
    {
      icon: Compass,
      title: 'Plan full trip',
      description: 'Plan a complete itinerary',
      message: 'Plan a full trip',
    },
  ],
  [TOOL_NAMES.HOTEL]: [
    {
      icon: Lightbulb,
      title: 'Local tips',
      description: 'Get local insider tips',
      message: 'Get local tips',
    },
    {
      icon: MapPin,
      title: 'Nearby places',
      description: 'Find places nearby',
      message: 'Find places nearby',
    },
    {
      icon: Cloud,
      title: 'Check weather',
      description: 'Check the weather forecast',
      message: 'Check the weather',
    },
  ],
  [TOOL_NAMES.WEATHER]: [
    {
      icon: MapPin,
      title: 'Top places',
      description: 'Find top places to visit',
      message: 'Find top places to visit',
    },
    {
      icon: Building2,
      title: 'Show hotels',
      description: 'Search for hotels',
      message: 'Show hotels',
    },
  ],
  [TOOL_NAMES.PLACES]: [
    {
      icon: Route,
      title: 'Walking tour',
      description: 'Build a walking tour',
      message: 'Build a walking tour',
    },
    {
      icon: Lightbulb,
      title: 'Local tips',
      description: 'Get local insider tips',
      message: 'Get local tips',
    },
  ],
  [TOOL_NAMES.ROUTE]: [
    {
      icon: UtensilsCrossed,
      title: 'Restaurants',
      description: 'Find restaurants nearby',
      message: 'Find restaurants nearby',
    },
    {
      icon: Lightbulb,
      title: 'Local tips',
      description: 'Get local insider tips',
      message: 'Get local tips',
    },
  ],
  [TOOL_NAMES.LOCAL_TIPS]: [
    {
      icon: MapPin,
      title: 'Explore places',
      description: 'Find places to visit',
      message: 'Find places to visit',
    },
    {
      icon: Plane,
      title: 'Search flights',
      description: 'Search for flights',
      message: 'Search for flights',
    },
  ],
  [TOOL_NAMES.TRIP_SUMMARY]: [
    {
      icon: Cloud,
      title: 'Check weather',
      description: 'Check the weather forecast',
      message: 'Check the weather',
    },
    {
      icon: Lightbulb,
      title: 'Local tips',
      description: 'Get local insider tips',
      message: 'Get local tips',
    },
  ],
  [TOOL_NAMES.DESTINATION_EXPLORER]: [
    {
      icon: Plane,
      title: 'Search flights',
      description: 'Search for flights',
      message: 'Search for flights',
    },
    {
      icon: Building2,
      title: 'Show hotels',
      description: 'Find hotels at destination',
      message: 'Show hotels',
    },
    {
      icon: Lightbulb,
      title: 'Local tips',
      description: 'Get local insider tips',
      message: 'Get local tips',
    },
  ],
};

export const TOOL_STATUS = {
  IN_PROGRESS: 'inProgress',
  EXECUTING: 'executing',
  COMPLETE: 'complete',
} as const;

// CopilotKit action names — human-in-the-loop, gates, and booked-item display
export const ACTIONS = {
  CHANGE_THEME: 'changeTheme',
  CONFIRM_LOCAL_TIPS: 'confirmLocalTips',
  CONFIRM_PLACES_SEARCH: 'confirmPlacesSearch',
  CONFIRM_ROUTE_SEARCH: 'confirmRouteSearch',
  CONFIRM_TRIP_SUMMARY: 'confirmTripSummary',
  SHOW_BOOKED_FLIGHTS: 'show-booked-flights',
  SHOW_BOOKED_HOTEL: 'show-booked-hotel',
  WAIT_FOR_FLIGHT_SELECTION: 'waitForFlightSelection',
  WAIT_FOR_HOTEL_BOOKING: 'waitForHotelBooking',
  GET_FLIGHT_INFO: 'get-flight-info',
  GET_HOTEL_INFO: 'get-hotel-info',
} as const;

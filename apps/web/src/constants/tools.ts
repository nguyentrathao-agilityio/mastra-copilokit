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

export const TOOL_SUGGESTIONS: Readonly<Partial<Record<string, readonly string[]>>> = {
  [TOOL_NAMES.FLIGHTS]: ['Search for hotels', 'Check the weather', 'Plan full trip'],
  [TOOL_NAMES.HOTEL]: ['Get local tips', 'Find places nearby', 'Check the weather'],
  [TOOL_NAMES.WEATHER]: ['Find top places to visit', 'Search for hotels'],
  [TOOL_NAMES.PLACES]: ['Build a walking tour', 'Get local tips'],
  [TOOL_NAMES.ROUTE]: ['Find restaurants nearby', 'Get local tips'],
  [TOOL_NAMES.LOCAL_TIPS]: ['Find places to visit', 'Search flights'],
  [TOOL_NAMES.TRIP_SUMMARY]: ['Check the weather', 'Get local tips'],
  [TOOL_NAMES.DESTINATION_EXPLORER]: ['Search flights', 'Find hotels', 'Check local tips'],
};

export const TOOL_STATUS = {
  IN_PROGRESS: 'inProgress',
  EXECUTING: 'executing',
  COMPLETE: 'complete',
} as const;

// CopilotKit action names — human-in-the-loop, gates, and booked-item display
export const ACTIONS = {
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

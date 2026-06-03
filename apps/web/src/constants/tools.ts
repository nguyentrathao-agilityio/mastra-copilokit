export const TOOL_NAMES = {
  WEATHER: 'weatherTool',
  FLIGHTS: 'flightsTool',
  HOTEL: 'hotelTool',
  LOCAL_TIPS: 'localTipsTool',
  PLACES: 'placesTool',
  ROUTE: 'routeTool',
  TRIP_SUMMARY: 'tripSummaryTool',
} as const;

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

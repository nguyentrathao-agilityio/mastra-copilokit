import type { RouteResult, WeatherResult } from '@repo/schemas';
import type { FlightSearchResult } from '@repo/types';
import { TOOLS } from '@/constants/tools';

export type FlightToolArgs = {
  origin: string;
  destination: string;
  departureDate: string;
};

export type FlightArgs = {
  origin?: string;
  destination?: string;
  departure_date?: string;
  adults?: number | string;
  return_date?: string;
  airline?: string;
  max_price?: number | string;
  max_stops?: number | string;
  sort?: string;
};

export type ToolResult =
  | { toolName: typeof TOOLS.WEATHER; result: WeatherResult }
  | { toolName: typeof TOOLS.FLIGHT; result: FlightSearchResult; args: FlightToolArgs }
  | { toolName: typeof TOOLS.ROUTE; result: RouteResult };

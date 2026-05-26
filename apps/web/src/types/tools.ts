import type { RouteResult, WeatherResult } from '@repo/schemas';
import type { FlightSearchResult } from '@repo/types';
import { TOOLS } from '@/constants/tools';

export type FlightToolArgs = {
  origin: string;
  destination: string;
  departureDate: string;
};

export type ToolResult =
  | { toolName: typeof TOOLS.WEATHER; result: WeatherResult }
  | { toolName: typeof TOOLS.FLIGHT; result: FlightSearchResult; args: FlightToolArgs }
  | { toolName: typeof TOOLS.ROUTE; result: RouteResult };

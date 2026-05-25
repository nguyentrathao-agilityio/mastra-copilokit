import { RouteResult, WeatherResult } from '@repo/schemas';
import { FlightSearchResult } from '@repo/types';
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

interface WeatherToolResultChunk {
  type: 'tool-result';
  payload: {
    toolCallId: string;
    toolName: typeof TOOLS.WEATHER;
    result: WeatherResult;
  };
}

interface FlightToolResultChunk {
  type: 'tool-result';
  payload: {
    toolCallId: string;
    toolName: typeof TOOLS.FLIGHT;
    result: FlightSearchResult;
    args: FlightToolArgs;
  };
}

interface RouteToolResultChunk {
  type: 'tool-result';
  payload: {
    toolCallId: string;
    toolName: typeof TOOLS.ROUTE;
    result: RouteResult;
  };
}

export type ToolResultChunk = WeatherToolResultChunk | FlightToolResultChunk | RouteToolResultChunk;

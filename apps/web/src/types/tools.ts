import { WeatherResult } from '@repo/schemas';
import { TOOLS } from '@/constants/tools';

export type ToolResult = { toolName: (typeof TOOLS)[keyof typeof TOOLS]; result: WeatherResult };
// | { toolName: 'flightTool'; result: FlightResult }
// | { toolName: 'hotelTool'; result: HotelResult };

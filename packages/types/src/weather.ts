export interface WeatherLocation {
  name: string;
  country?: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface CurrentWeather {
  time: string;
  temperatureC: number;
  apparentTemperatureC: number;
  relativeHumidity: number;
  windSpeedKmh: number;
  weatherCode: number;
  description: string;
}

export interface DailyForecast {
  date: string;
  tempMinC: number;
  tempMaxC: number;
  precipitationProbabilityMax?: number;
  weatherCode: number;
  description: string;
}

export interface WeatherResult {
  location: WeatherLocation;
  current: CurrentWeather;
  daily: DailyForecast[];
  attribution: string;
}

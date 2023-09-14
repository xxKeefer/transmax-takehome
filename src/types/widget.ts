export type RouteData = {
  status: 'green' | 'yellow' | 'red';
  name: string;
  via: [string, string];
  distance: number;
  duration: number;
};

export type IconType = 'sunny' | 'cloudy' | 'rainy' | 'snowy';

export type WeatherData = {
  city: string;
  date: string;
  temperature: number;
  humidity: number;
  rainChance: number;
  windSpeed: number;
  icon: IconType;
  tomorrow: {
    temperature: number;
    icon: IconType;
  };
};

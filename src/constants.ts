import {formatISO} from 'date-fns';
import {RouteData, WeatherData} from '~/types';

export const defaultRouteData: RouteData[] = [
  {
    status: 'red',
    name: 'Monash Fwy Out',
    via: ['Kings Way', 'Eastlink'],
    distance: 13,
    duration: 45,
  },
  {
    status: 'red',
    name: 'Monash Fwy Out',
    via: ['Kings Way', 'Eastlink'],
    distance: 15,
    duration: 28,
  },
  {
    status: 'yellow',
    name: 'Western Ring Road',
    via: ['West Gate Fwy', 'Western Fwy'],
    distance: 5,
    duration: 5,
  },
  {
    status: 'yellow',
    name: 'Eastern Fwy',
    via: ['Hoddle St', 'Springvale Rd'],
    distance: 15,
    duration: 25,
  },
];

export const defaultWeatherData: WeatherData = {
  city: 'Melbourne',
  date: formatISO(new Date()),
  temperature: 32,
  humidity: 78,
  rainChance: 34,
  windSpeed: 21,
  icon: 'cloudy',
  tomorrow: {
    temperature: 30,
    icon: 'sunny',
  },
};

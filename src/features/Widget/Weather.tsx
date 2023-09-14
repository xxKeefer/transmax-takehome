import React from 'react';
import {parseISO, format} from 'date-fns';
import {IconType} from '~/types';
import {useWidget} from './WidgetContext';

const weatherIcon = (name: IconType) => {
  if (name === 'sunny') {
    return '☀️';
  }
  if (name === 'cloudy') {
    return '☁️';
  }
  if (name === 'rainy') {
    return '🌧️';
  }
  if (name === 'snowy') {
    return '❄️';
  }
  return '';
};

export const Weather = () => {
  const {weather} = useWidget();
  const {
    city,
    date,
    temperature,
    humidity,
    rainChance,
    windSpeed,
    icon,
    tomorrow,
  } = weather;

  const parsedDate = parseISO(date);
  const day = format(parsedDate, 'E io');
  const time = format(parsedDate, 'h:mm a');

  return (
    <div className="px-4 py-2 ">
      <div className="flex gap-2 flex-row ">
        <div className="flex flex-col items-center flex-grow">
          <div className="font-light text-sm">{city}</div>
          <div className="font-regular text-5xl">{temperature}°</div>
          <div className="flex flex-row justify-between gap-4">
            <span className="font-light text-xs whitespace-nowrap">{day}</span>
            <span className="font-light text-xs whitespace-nowrap">{time}</span>
          </div>
        </div>
        <div className="w-1/2 text-7xl">{weatherIcon(icon)}</div>
      </div>
      <div className="py-4">
        <div className="w-full flex justify-between gap-5">
          <span className="font-light text-xs flex-1">Humidity</span>
          <span className="font-regular w-1/3">{humidity}%</span>
        </div>
        <div className="w-full flex justify-between gap-5">
          <span className="font-light text-xs flex-1">Chance of Rain</span>
          <span className="font-regular w-1/3">{rainChance}%</span>
        </div>
        <div className="w-full flex justify-between gap-5">
          <span className="font-light text-xs flex-1">Wind</span>
          <span className="font-regular w-1/3">
            {windSpeed} <span className="font-light text-xs">kmh</span>
          </span>
        </div>
        <div className="w-full flex justify-between gap-5">
          <span className="font-light text-xs flex-1">Tomorrow</span>
          <span className="font-regular w-1/3">
            {tomorrow.temperature}° {weatherIcon(tomorrow.icon)}
          </span>
        </div>
      </div>
    </div>
  );
};

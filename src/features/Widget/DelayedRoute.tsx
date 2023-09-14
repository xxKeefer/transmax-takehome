import React from 'react';
import {RouteData} from '~/types';

type Props = {data: RouteData};

const statusMap = {
  red: 'text-red-500',
  yellow: 'text-yellow-500',
  green: 'text-green-500',
} as const;

export const DelayedRoute = ({data}: Props) => {
  const {status, name, via, distance, duration} = data;
  return (
    <div className="border-t border-base-100 p-2">
      <div className="flex flex-row justify-start items-center gap-2">
        <div className={`${statusMap[status]} text-[0.5rem]`}>●</div>
        <div className="opacity-80">{name}</div>
        <span className="opacity-60 text-xs ml-auto">
          {duration}
          <span className="ml-0.5">km</span>
        </span>
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <div className="text-xl opacity-80 -ml-[0.36rem]">↓</div>
        <div className="flex flex-col opacity-60 text-xs">
          <span>{via[0]}</span>
          <span>{via[1]}</span>
        </div>
        <span className="ml-auto">
          <span className="font-bold">{distance}</span>
          <span className="text-xs ml-0.5">min</span>
        </span>
      </div>
    </div>
  );
};

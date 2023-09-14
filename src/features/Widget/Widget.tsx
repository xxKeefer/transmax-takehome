import React from 'react';
import {Weather} from './Weather';
import {DelayedRoutes} from './DelayedRoutes';
import {RampChart} from './RampChart';
import {WidgetContextProvider} from './WidgetContext';

export const Widget = () => {
  return (
    <WidgetContextProvider>
      <aside className="bg-base-300 text-white p-2 flex flex-col gap-4 ">
        <Weather />
        <DelayedRoutes />
        <RampChart />
      </aside>
    </WidgetContextProvider>
  );
};

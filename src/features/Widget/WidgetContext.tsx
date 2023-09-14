import React, {createContext, useContext} from 'react';
import {defaultRouteData, defaultWeatherData} from '~/constants';

type WidgetContextType = ReturnType<typeof useWidgetManager>;

const useWidgetManager = () => {
  return {
    weather: defaultWeatherData,
    delays: defaultRouteData,
  };
};

const WidgetContext = createContext<WidgetContextType | null>(null);

export const WidgetContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WidgetContext.Provider value={useWidgetManager()}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidget = () => {
  const context = useContext(WidgetContext);

  if (!context) {
    throw new Error(
      'useWidget has to be used within <CurrentUserContext.Provider>'
    );
  }

  return context;
};

import React from 'react';
import {DelayedRoute} from './DelayedRoute';
import {Collapse} from '~/components';
import {useWidget} from './WidgetContext';

export const DelayedRoutes = () => {
  const {delays} = useWidget();
  return (
    <Collapse title="Delayed Routes">
      {delays.map((route, index) => (
        <DelayedRoute key={index} data={route} />
      ))}
    </Collapse>
  );
};

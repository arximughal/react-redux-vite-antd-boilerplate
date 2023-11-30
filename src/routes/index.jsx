import React from 'react';
import {
  Homepage,
  NotFound,
} from '../pages';

export default [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

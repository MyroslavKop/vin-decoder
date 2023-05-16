import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Root from './pages/Root';
import Variables from './pages/Variables/Variables';
import Variable from './pages/Variable/Variable';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'variables',
        element: <Variables />,
      },
      {
        path: 'variables/:variableId',
        element: <Variable />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

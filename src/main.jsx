import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJosbs from './Components/AppliedJobs/AppliedJosbs';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/applied',
        element: <AppliedJosbs></AppliedJosbs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
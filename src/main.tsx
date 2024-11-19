import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import Home from './components/Home/index.tsx';
import TermsOfService from './components/TermsOfService/index.tsx';
import PrivacyPolicy from './components/PrivacyPolicy/index.tsx';

import "animate.css/animate.compat.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/terms-of-service',
    element: <TermsOfService />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import { createBrowserRouter, Navigate } from 'react-router-dom';

import { WardrobePage } from '../../pages/WardrobePage.tsx';
import { AddToWardrobePage } from '../../pages/AddToWardrobePage.tsx';
import { DetailPage } from '../../pages/DetailPage.tsx';

import { MainLayout } from '../../layout/MainLayout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="/wardrobe" replace />,
      },
      {
        path: 'wardrobe',
        element: <WardrobePage />,
      },
      {
        path: 'wardrobe/add',
        element: <AddToWardrobePage />,
      },
      {
        path: 'wardrobe/detail',
        element: <DetailPage />,
      },
    ],
  },
]);

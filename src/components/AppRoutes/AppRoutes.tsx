import { createBrowserRouter, Navigate } from 'react-router-dom';

import { WardrobePage } from '@/pages/wardrobe/WardrobePage';
import { AddItemPage } from '@/pages/add-item/AddItemPage';
import { DetailPage } from '@/pages/item-details/DetailPage';

import { MainLayout } from '@/layout/MainLayout.tsx';

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
        element: <AddItemPage />,
      },
      {
        path: 'wardrobe/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

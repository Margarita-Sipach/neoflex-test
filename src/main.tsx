import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Routes } from './lib/routes';
import { MainPage } from './components/pages/MainPage';
import { CartPage } from './components/pages/CartPage';
import { NotFoundPage } from './components/pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: Routes.main,
    element: <MainPage/>,
  },
  {
    path: Routes.cart,
    element: <CartPage/>,
  },
  {
    path: Routes.notFound,
    element: <NotFoundPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

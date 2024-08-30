import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Páginas e componentes
import Home from '../pages/Home';
import Login from '../pages/Login';
import Carrinho from '../pages/Carrinho';
import Pedido from '../pages/Pedido';
import Pedidos from '../pages/Pedidos';
import ErrorPage from '../components/error-page';
import PrivateRoute from '../components/PrivateRoute';
import Layout from '../components/Layout'; // Importa o layout

// Criação do router
const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      { path: '/', element: <Home /> },
      { path: '/carrinho', element: <Carrinho /> },
      { path: '/pedido', element: <PrivateRoute element={<Pedido />} /> },
      { path: '/pedidos', element: <PrivateRoute element={<Pedidos />} />} ,
      { path: '*', element: <ErrorPage /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);

const Routes = () => {
  return (
    <RouterProvider router={router}>
      <ToastContainer autoClose={3000} />
    </RouterProvider>
  );
};

export default Routes;

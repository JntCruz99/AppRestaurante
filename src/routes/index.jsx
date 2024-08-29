import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from '../context/Auth/AuthContext';
import { ToastContainer } from 'react-toastify';

// Páginas e componentes
import Home from '../pages/Home';
import Login from '../pages/Login';
import Carrinho from '../pages/Carrinho';
import Pedido from '../pages/Pedido';
import Pedidos from '../pages/Pedidos';
import ErrorPage from '../components/error-page';
import PrivateRoute from '../components/PrivateRoute';

// Criação do router
const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute element={<Home />} />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/carrinho', element: <PrivateRoute element={<Carrinho />} /> },
      { path: '/pedido', element: <Pedido /> },
      { path: '/pedidos', element: <Pedidos /> },
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
    <RouterProvider router={router} >
      <AuthProvider/>
      <ToastContainer autoClose={3000} />
    </RouterProvider>
  );
};

export default Routes;

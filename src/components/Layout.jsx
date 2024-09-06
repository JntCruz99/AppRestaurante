import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/Auth/AuthContext';
import Fabs from './Fabs';
import { CartProvider } from '../context/CartContext'

const Layout = () => {
  return (
    <AuthProvider>
      <CartProvider>
      <Fabs/>
      <Outlet />
      </CartProvider>
    </AuthProvider>
  );
};

export default Layout;

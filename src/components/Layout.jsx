import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/Auth/AuthContext';

const Layout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default Layout;

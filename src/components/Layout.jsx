import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/Auth/AuthContext';
import Fabs from './Fabs';

const Layout = () => {
  return (
    <AuthProvider>
      <Fabs/>
      <Outlet />
    </AuthProvider>
  );
};

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/Auth/AuthContext';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <AuthProvider>
      <Navbar/>
      <Outlet />
    </AuthProvider>
  );
};

export default Layout;

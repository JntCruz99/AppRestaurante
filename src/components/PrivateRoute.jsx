import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth/AuthContext'; 
const PrivateRoute = ({ element }) => {
  const { isAuth, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>; 
  }

  return isAuth ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

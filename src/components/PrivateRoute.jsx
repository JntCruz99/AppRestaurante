import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth/AuthContext'; // Ajuste o caminho conforme necessário

const PrivateRoute = ({ element }) => {
  const { isAuth, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>; // Ou um componente de carregamento
  }

  return isAuth ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

import React, { useContext } from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/Auth/AuthContext";
import BackdropLoading from "../components/BackdropLoading";// Assumindo que você tenha esse componente

const PrivateRoute = ({ element: Component, isPrivate = false, ...rest }) => {
  const { isAuth, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <BackdropLoading />;
  }

  if (isPrivate && !isAuth) {
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: location },
        }}
        replace
      />
    );
  }

  if (!isPrivate && isAuth) {
    return (
      <Navigate
        to={{
          pathname: "/",
          state: { from: location },
        }}
        replace
      />
    );
  }

  return <Route {...rest} element={Component} />;
};

export default PrivateRoute;

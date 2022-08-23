import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props.isLoggedIn);
  return {
    ...(props.isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Navigate to="/" replace />
    )),
  };
};

export default ProtectedRoute;

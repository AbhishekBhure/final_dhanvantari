import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  // if (loading) {
  //   return null;
  // }

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  // if (isAdmin === true && user.role !== "admin") {
  //   <Navigate to="/login" replace />;
  // }
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

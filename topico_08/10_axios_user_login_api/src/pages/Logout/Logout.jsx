import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";

const Logout = () => {
  const { setToken } = useAuthContext();
  setToken(null);
  return <Navigate to="/login" />;
};

export default Logout;

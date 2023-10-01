import React, { useContext } from "react";
import { LoginContext } from "../../contexts/loginContext";
import { Navigate } from "react-router-dom";

const AuthOverseer = ({ children }) => {
  const { authenticated } = useContext(LoginContext);
  console.log(authenticated);
  if (authenticated) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default AuthOverseer;

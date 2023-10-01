import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginManager = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const adminDefaultInfo = {
    mail: "abc@test.com",
    pass: "123456",
  };
  //   useEffect(() => {
  //     if (authenticated === true) {
  //       <Navigate to="/" />;
  //     }
  //   }, [authenticated]);
  const loginValues = { adminDefaultInfo, authenticated, setAuthenticated };
  return (
    <LoginContext.Provider value={loginValues}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginManager;

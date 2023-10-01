import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginManager from "./components/contexts/loginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginManager>
      <App />
    </LoginManager>
  </React.StrictMode>
);

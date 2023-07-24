import React from "react";
import ReactDOM from "react-dom/client";
import { LightModeProvider } from "./contexts/LightModeContext";
import App from "./App";
import "./LightMode.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LightModeProvider>
      <App />
    </LightModeProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./CSS/index.css";
import App from "./App";

const darkTheme = {
  textColor: "#fff",
  bgColor: "#000",
};

const lightTheme = {
  textColor: "#000",
  bgColor: "#fff",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

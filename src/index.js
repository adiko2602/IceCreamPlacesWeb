import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./theme/theme";
import { UserContextProvider } from "./context/UserContext";
import { GlobalContextProvider } from "./context/GlobalContext";

const theme = createTheme(customTheme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <UserContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </UserContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);

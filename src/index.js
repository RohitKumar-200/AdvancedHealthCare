import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CurrentUserProvider } from "./Context/userContext";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

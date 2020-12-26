import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CurrentUserProvider } from "./Context/userContext";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { BrowserRouter } from "react-router-dom";

import { ResultContextProvider } from "./context/ResultContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResultContextProvider>
  </React.StrictMode>
);

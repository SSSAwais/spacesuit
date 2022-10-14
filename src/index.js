import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataProvider } from "./context/reducer/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataProvider>
  </BrowserRouter>
);

reportWebVitals();

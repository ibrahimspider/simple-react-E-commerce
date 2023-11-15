import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//react router
import { BrowserRouter } from "react-router-dom";
/// import pages
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

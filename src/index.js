import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterWrapper from "./comps/RouterWrapper";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterWrapper />
  </React.StrictMode>
);

reportWebVitals();

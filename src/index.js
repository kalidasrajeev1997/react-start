import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

//virtual dom -- reactdom
// document --> dom
// virtual / dom compare
// update

// root file(Parent Element)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

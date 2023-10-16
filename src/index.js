import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Effect from "./Effect";
import "./app.css";
import Color from "./Color";
import Layout from "./Layout";
import Website from "./Website";
import Router from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

//virtual dom -- reactdom
// document --> dom
// virtual / dom compare
// update

// state management --> univerisal

// app wide use
// login --> token (save)

// root file(Parent Element)
root.render(
  <React.StrictMode>
    <Router />
    {/* <Effect /> */}
  </React.StrictMode>
);

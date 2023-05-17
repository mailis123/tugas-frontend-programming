/**
 * @description: This is for learning purpose
 * @author: Aufa Billah
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
      {/*
       * Bungkus/Hubungkan Aplikasi dengan Browser Router.
       * Agar URL browser dapat dimanipulasi oleh React Router
       */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );

// get root element
const container = document.getElementById("root");

// create root
const root = ReactDOM.createRoot(container);

// render app to root
root.render(<App />);

reportWebVitals();

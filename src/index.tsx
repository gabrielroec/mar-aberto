import "./reset.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Footer } from "./components/footer/footer";
import { NavBar } from "./components/navbar/navbar";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

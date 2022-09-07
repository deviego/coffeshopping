import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import CoffeeMenu from "./routes/coffeemenu";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CoffeeMenu />}/>
    </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

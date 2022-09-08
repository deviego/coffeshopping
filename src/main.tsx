import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Cart from "./routes/cart";
import CoffeeMenu from "./routes/coffeemenu";
import Home from "./routes/home";
import Sobre from "./routes/sobre";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coffeemenu" element={<CoffeeMenu />}/>
      <Route path="/sobre" element={<Sobre />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

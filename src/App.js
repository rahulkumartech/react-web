import "./styles.css";
import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Servecs from "./components/Servecs";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App(props) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="servecs" element={<Servecs />} />
        <Route path="product" element={<Product />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

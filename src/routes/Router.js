import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={Login()} />
        <Route path="/signup" element={Signup()} />
        <Route path="/about" element={About()} />
        <Route path="/contact" element={Contact()} />
        <Route path="/" element={Dashboard()} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

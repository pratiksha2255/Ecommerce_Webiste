import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={Login()} />
        <Route path="/signup" element={Signup()} />
      </Routes>
    </>
  );
};

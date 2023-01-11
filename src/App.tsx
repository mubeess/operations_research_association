import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LayOut from "./pages/Dashboard/LayOut";
import Home from "./pages/Dashboard/Home";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<SignUp />} path="/signup" />
      <Route path="dashboard" element={<LayOut />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

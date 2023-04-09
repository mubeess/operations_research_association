import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LayOut from "./pages/Dashboard/LayOut";
import Home from "./pages/Dashboard/Home";
import "./App.css";
import Payment from "./pages/Dashboard/Payment";
import CertificatePage from "./pages/Dashboard/CertificatePage";
import Seminars from "./pages/Dashboard/Seminars";
import Verify from "./pages/Verify";

export default function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<SignUp />} path="/signup" />
      <Route element={<Verify/>} path="/verify/:token"/>
      <Route path="dashboard" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="payment" element={<Payment />} />
        <Route path="certificate" element={<CertificatePage />} />
        <Route path="seminars" element={<Seminars />} />
      </Route>
    </Routes>
  );
}

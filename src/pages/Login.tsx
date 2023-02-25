import React, { useCallback, useEffect, useState } from "react";
import "./styles/login.css";
import Logo from "../assets/Images/or_logo.png";
import { Header, RegularText } from "../components/Common";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setUser } from "../redux/user/userSlice";
import axios from "axios";
import { setLoading } from "../redux/user/loginSlice";
import useFetch from "../hooks/useFetch";
function Login() {
  const navigate = useNavigate();
  const loading = useSelector((state: RootState) => state.loading);
  // const dispatch = useDispatch();
  // const myData = useFetch("/src/index.json");
  // useEffect(() => {
  //   if (myData) {
  //     console.log(myData);
  //   }
  // }, []);
  return (
    <div className="auth_container">
      <div className="auth_inner_container">
        <img src={Logo} alt="logo" />
        <div className="inputs_container">
          <Header text="Sign in to ORIDSAN" />
          <RegularText
            text="To sign in, please type in the email address linked to your ORIDSAN account and your ORIDSAN password.

"
          />
          <Input
            onChange={() => {}}
            type="email"
            placeholder="someone@example.com"
            label="Email Address"
          />
          <Input
            onChange={() => {}}
            type="password"
            label="Password"
            placeholder="type Password here..."
          />
          <div className="forgot_password">
            <RegularText text="Forgot Password ?" />
            <span style={{ marginLeft: 10 }}>Reset It</span>
          </div>
          <Button
            onClick={() => navigate("dashboard")}
            style={{
              width: 188,
              marginTop: 14,
            }}
            label="Continue"
          />
          <Button
            onClick={() => navigate("signup")}
            lineButton
            label="Create an account"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

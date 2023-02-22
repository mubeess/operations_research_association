import React, { useEffect, useState } from "react";
import "./styles/login.css";
import Logo from "../assets/Images/or_logo.png";
import { Header, RegularText } from "../components/Common";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setUser } from "../redux/user/userSlice";
function Login() {
  const navigate = useNavigate();
  const user = useSelector((user: RootState) => user.user);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //  console.log(user,"+++")
  //  dispatch(setUser({
  //    user:{
  //      firstName:'mubis',
  //      lastName:'ibrahim',
  //      email:'',
  //      isLoggedIn:true,
  //      token:''
  //    }
  //  }))
  //  console.log(user.user,"myuser")
  // },[])
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
            type="email"
            placeholder="someone@example.com"
            label="Email Address"
          />
          <Input
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

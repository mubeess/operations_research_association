import React from "react";
import "./styles/login.css";
import Logo from "../assets/Images/or_logo.png";
import { Header, RegularText } from "../components/Common";
import Input from "../components/Input";
import Button from "../components/Button";
function Login() {
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
          <Input placeholder="someone@example.com" label="Email Address" />
          <Input label="Password" placeholder="type Password here..." />
          <div className="forgot_password">
            <RegularText text="Forgot Password ?" />
            <span style={{ marginLeft: 10 }}>Reset It</span>
          </div>
          <Button
            style={{
              width: 188,
              marginTop: 14,
            }}
            label="Continue"
          />
          <Button lineButton label="Create an account" />
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "./styles/login.css";
import Logo from "../assets/Images/or_logo.png";
import { Header, RegularText } from "../components/Common";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="auth_container">
      <div className="auth_inner_container">
        <img src={Logo} alt="logo" />
        <div className="inputs_container">
          <Header text="Sign up to ORIDSAN" />
          <RegularText
            text="To sign up, please type in the email address, Name and Confirm password

            "
          />
          <Input
            required
            type="email"
            placeholder="someone@example.com"
            label="Email Address"
          />
          <Input label="First Name" placeholder="Enter first name here." />
          <Input label="Last Name" placeholder="Enter your last name here" />
          <Input
            required
            type="password"
            label="Password"
            placeholder="********"
          />
          <Input
            required
            type="password"
            label="Confirm Password"
            placeholder="********"
          />
          <div className="terms">
            <input type="checkbox" />
            <span>
              By clicking on Signup, you agree to our <a>Terms of Service</a>
              and <a>policy & terms</a>
            </span>
          </div>
          <Button
            style={{
              width: 188,
              marginTop: 14,
            }}
            label="Sign Up"
          />
          <div className="have_account">
            <span>Already have an account ?</span>
          </div>
          <Button onClick={() => navigate("/")} lineButton label="Sign In" />
        </div>
      </div>
    </div>
  );
}

export default Login;

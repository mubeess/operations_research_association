import React, { useState } from "react";
import "./styles/login.css";
import Logo from "../assets/Images/or_logo.png";
import { Header, RegularText } from "../components/Common";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
function Login() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be more than six characters")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    confirmPassword: Yup.string()
      .min(6, "Password must be more than six characters")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
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
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            name="email"
            id="email"
            onChange={formik.handleChange}
            required
            type="email"
            placeholder="someone@example.com"
            label="Email Address"
          />
          <Input
            name="firstName"
            onChange={formik.handleChange}
            label="First Name"
            placeholder="Enter first name here."
          />
          <Input
            name="lastName"
            onChange={formik.handleChange}
            label="Last Name"
            placeholder="Enter your last name here"
          />
          <Input
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
            name="password"
            onChange={formik.handleChange}
            required
            type="password"
            label="Password"
            placeholder="********"
          />
          <Input
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""
            }
            name="confirmPassword"
            onChange={formik.handleChange}
            required
            type="password"
            label="Confirm Password"
            placeholder="********"
          />
          <div className="terms">
            <input
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
              type="checkbox"
            />
            <span>
              By clicking on Signup, you agree to our <a>Terms of Service</a>
              and <a>policy & terms</a>
            </span>
          </div>
          <Button
            disabled={!checked}
            onClick={formik.handleSubmit}
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

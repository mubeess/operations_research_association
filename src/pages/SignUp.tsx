import React, { useState } from "react";
import "./styles/login.css";
import Logo from "../assets/Images/or_logo.png";
import { Header, RegularText } from "../components/Common";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import query from "../helpers/query";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import { Fade } from "react-awesome-reveal";
function Login() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [callTetx, setCallText] = useState("");

  const setAlert = (text: string) => {
    setCallText(text);
    setTimeout(() => {
      setCallText("");
    }, 3000);
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be more than six characters")
      .required(),
    email: Yup.string().email("Invalid email address").required(),
    confirmPassword: Yup.string().min(6, "Password must match").required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        setAlert("Password must match");
        return;
      }
      setLoading(true);
      const newValue = {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
      };
      const response = await query({
        method: "POST",
        url: "/users",
        bodyData: newValue,
      });
      setLoading(false);
      setAlert(`${response.success?'KIndly Check Your Mail and verify':response.data.message}`);
      formik.resetForm()
    },
    validationSchema,
  });
  return (
    <Fade>
      <div className="auth_container">
        <Loading loading={loading} />
        <Alert text={callTetx} />
        <div className="auth_inner_container">
          <img src={Logo} alt="logo" />
          <div className="inputs_container">
            <Header text="Sign up to ORIDSAN" />
            <RegularText
              text="To sign up, please type in the email address, Name and Confirm password

            "
            />
            <Input
            value={formik.values.email}
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
            value={formik.values.firstName}
              name="firstName"
              onChange={formik.handleChange}
              label="First Name"
              placeholder="Enter first name here."
            />
            <Input
            value={formik.values.lastName}
              name="lastName"
              onChange={formik.handleChange}
              label="Last Name"
              placeholder="Enter your last name here"
            />
            <Input
            value={formik.values.password}
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
            value={formik.values.confirmPassword}
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
    </Fade>
  );
}

export default Login;

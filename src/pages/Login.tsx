import React, { useState } from "react";
import "./styles/login.css";
import Logo from "../assets/Images/or_logo.png";
import { Header, RegularText } from "../components/Common";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import * as Yup from "yup";
import { Fade } from "react-awesome-reveal";
import { useFormik } from "formik";
import Loading from "../components/Loading";
import query from "../helpers/query";
import Alert from "../components/Alert";
import {
  setEducatioanlQualification,
  setPersonalDetails,
  setSupportingDocs,
} from "../redux/user/userDetailSlice";
function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [alertText, setAlert] = useState("");
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be more than six characters")
      .required(),
    email: Yup.string().email("Invalid email address").required(),
  });
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      setLoading(true);
      const response = await query({
        method: "POST",
        url: "/users/login",
        bodyData: values,
      });
      setLoading(false);
      setAlert(response.data.message);
      setTimeout(() => {
        setAlert("");
      }, 3000);
      if (response.success) {
        dispatch(
          setUser({
            user: {
              isLoggedIn: true,
              firstName: response.data.data.data.personalDetails.firstName,
              email: response.data.data.data.personalDetails.email,
              lastName: response.data.data.data.personalDetails.lastName,
              token: response.data.data.token,
              isNew:
                response.data.data.data.supportingDoc.length > 0 ? false : true,
            },
          })
        );
        dispatch(
          setPersonalDetails({
            personalDetails: response.data.data.data.personalDetails
          })
        );
        dispatch(
          setSupportingDocs({
            supportingDocs: response.data.data.data.supportingDoc,
          })
        );
        dispatch(
          setEducatioanlQualification({
            educationalQualification:
              response.data.data.data.educationalQualification,
          })
        );
        navigate("/dashboard");
      }
    },
    validationSchema,
  });
  return (
    <Fade>
      <div className="auth_container">
        <Loading loading={loading} />
        <Alert text={alertText} />
        <div className="auth_inner_container">
          <img src={Logo} alt="logo" />
          <div className="inputs_container">
            <Header text="Sign in to ORIDSAN" />
            <RegularText
              text="To sign in, please type in the email address linked to your ORIDSAN account and your ORIDSAN password.

"
            />
            <Input
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""
              }
              id="email"
              onChange={formik.handleChange}
              type="email"
              placeholder="someone@example.com"
              label="Email Address"
            />
            <Input
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""
              }
              id="password"
              onChange={formik.handleChange}
              type="password"
              label="Password"
              placeholder="type Password here..."
            />
            <div className="forgot_password">
              <RegularText text="Forgot Password ?" />
              <span style={{ marginLeft: 10 }}>Reset It</span>
            </div>
            <Button
              onClick={formik.handleSubmit}
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
    </Fade>
  );
}

export default Login;

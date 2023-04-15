import React, { useEffect } from "react";
import "./styles/section1.css";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { Header } from "../../../components/Common";
import EditButton from "../../../components/EditButton";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { setPersonalDetails } from "../../../redux/user/userDetailSlice";
import Button from "../../../components/Button";

function Section1({ overview = false,gotoNext,gotoPage }) {
  const user = useSelector((user) => user.userDetail);
  const dispatch = useDispatch();
  const initialValues = {
    dob: "",
    gender: "",
    phone: "",
    zone: "",
    state: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (val) => {
      let copied = Object.assign({}, user.personalDetails);
      delete copied.password;
      delete copied._id;
      const mergedValue = { ...copied, ...val };
      console.log(mergedValue,'m')
      dispatch(
        setPersonalDetails({
          personalDetails: mergedValue,
        })
      );
    },
  });
 
  return (
    <>
    <div className="section1_container">
      <Header text="SECTION A: Personal Details" />
      <div
        style={{
          width: overview ? "90%" : window.innerWidth>767?'70%':'90%',
        }}
        className="main_container"
      >
        <Input
          value={user.personalDetails ? user.personalDetails.firstName : ""}
          onChange={() => {}}
          disabled={true}
          outlined
          label="First Name"
        />
        <Input
          value={user.personalDetails ? user.personalDetails.lastName : ""}
          onChange={() => {}}
          disabled={true}
          outlined
          label="Last Name"
        />
        <Input
          onChange={() => {}}
          disabled={true}
          outlined
          label="Middle Name"
        />
        <Input
          name="dob"
          onChange={formik.handleChange}
          disabled={overview}
          outlined
          label="D.O.B"
          type="date"
          value={user.personalDetails && overview ? user.personalDetails.dob : formik.values.dob}
        />
        <Input
          value={user.personalDetails ? user.personalDetails.email : ""}
          onChange={() => {}}
          placeholder="sample@mail.com"
          disabled
          outlined
          label="Email Address"
          style={{ gridColumn: "1/3" }}
        />
        <Select
          placeholder={user.personalDetails ? user.personalDetails.gender : ""}
          name="gender"
          onChange={formik.handleChange}
          disabled={overview}
          label="Gender"
          options={["m", "f"]}
        />
        <Input
          value={user.personalDetails && overview ? user.personalDetails.phone : formik.values.phone}
          name="phone"
          onChange={formik.handleChange}
          disabled={overview}
          outlined
          placeholder="+234"
          label="Phone NUmber"
        />
        <Select
          placeholder={user.personalDetails ? user.personalDetails.zone : ""}
          name="zone"
          onChange={formik.handleChange}
          disabled={overview}
          label="Zone"
          options={["f", "d"]}
        />
        <Select
          placeholder={user.personalDetails ? user.personalDetails.state : ""}
          name="state"
          onChange={formik.handleChange}
          disabled={overview}
          label="State"
          options={["d", "d"]}
        />
        {overview && <EditButton onClick={()=>{
          gotoPage()
        }} />}
      </div>
    </div>
    {!overview&&<Button style={{
        marginTop:20,
        width:70,
        marginLeft:10
      }} onClick={()=>{
          formik.handleSubmit()
          gotoNext?.()
        }} label="Next"/>}
    </>
  );
}

export default Section1;

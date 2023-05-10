import React, { useEffect } from "react";
import "./styles/section1.css";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { Header } from "../../../components/Common";
import EditButton from "../../../components/EditButton";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, } from "formik";
import { setPersonalDetails } from "../../../redux/user/userDetailSlice";
import Button from "../../../components/Button";
import {states} from '../../../helpers/state'
import * as Yup from 'yup'

function Section1({ overview = false,gotoNext,gotoPage }) {

  const user = useSelector((user) => user.userDetail);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    dob: Yup.string().required(),
    gender: Yup.string().required(),
    phone: Yup.string().required(),
    zone: Yup.string().required(),
    state: Yup.string().required(),
  });

  
  const initialValues = {
    dob: user?.personalDetails?.dob,
    gender: "",
    phone: user?.personalDetails?.phone,
    state: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      dob: Yup.string().required(),
      gender: Yup.string().required(),
      phone: Yup.string().required(),
      state: Yup.string().required(),
  }),
    onSubmit: (val) => {
      let copied = Object.assign({}, user.personalDetails);
      delete copied.password;
      delete copied._id;
      const mergedValue = { ...copied, ...val };
      // console.log(mergedValue,'m')
      dispatch(
        setPersonalDetails({
          personalDetails: mergedValue,
        })
      );
      gotoNext?.()

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
          value={formik?.values?.dob}
          error={formik.errors.dob}
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

        <div>
          <Select
            placeholder={"select gender"}
            name="gender"
            onChange={formik.handleChange}
            disabled={overview}
            value={user?.personalDetails?.gender || formik.values.gender}
            label="Gender"
            options={["male", "female"]}
            style={{
              height: '50px'
            }}
          />
          { formik.errors.gender && <p className="text-[red] text-[12px]">{formik.errors.gender}</p>}
        </div>
        <Input
          value={ formik?.values?.phone}
          name="phone"
          onChange={formik.handleChange}
          disabled={overview}
          outlined
          placeholder="+234"
          label="Phone NUmber"
          error={ formik.errors.phone}
        />
      
        <div style={{gridColumn: "1/3"}}>
          <Select
            placeholder={"select state"}
            name="state"
            onChange={formik.handleChange}
            disabled={overview}
            label="State"
            value={user?.personalDetails?.state || formik.values.state}
            options={states}
            style={{
              height: '50px',
              gridColumn: "1/3"
            }}
          />
          { formik.errors.state && <p className="text-[red] text-[12px]">{formik.errors.state}</p>}

        </div>
        {overview && <EditButton onClick={()=>{
          gotoPage()
        }} />}
      </div>
    </div>

    <div className=" w-[70%] flex justify-between">

    <Button style={{
          marginTop:20,
          width:70,
          marginLeft:10,
          backgroundColor: 'white',
          color: 'black'
        }} onClick={()=>{
          gotoPage(0)
          }} lineButton={true} label="Back"/>

      {!overview&&<Button style={{
          marginTop:20,
          width:70,
          marginLeft:10
        }} onClick={()=>{
            formik.handleSubmit()
          }} label="Next"/>}

    </div>
    </>
  );
}

export default Section1;

import React, { useEffect } from "react";
import "./styles/section1.css";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { Header } from "../../../components/Common";
import EditButton from "../../../components/EditButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useFormik } from "formik";
import { setPersonalDetails } from "../../../redux/user/userDetailSlice";
interface Section1Props {
  overview?: boolean;
}
function Section1({ overview = false }: Section1Props) {
  const user = useSelector((user: RootState) => user.userDetail);
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
      let copied = Object.assign({}, user.personalDetails)
      delete copied.password
      delete copied._id
      const mergedValue = { ...copied, ...val };
      dispatch(
        setPersonalDetails({
          personalDetails: mergedValue,
        })
      );
    },
  });
  useEffect(() => {
    return () => {
      formik.handleSubmit();
    };
  }, []);
  return (
    <div className="section1_container">
      <Header text="SECTION A: Personal Details" />
      <div
        style={{
          width: overview ? "90%" : "70%",
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
          id="dob"
          onChange={formik.handleChange}
          disabled={overview}
          outlined
          label="D.O.B"
          type="date"
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
          id="gender"
          onChange={formik.handleChange}
          disabled={overview}
          label="Gender"
          options={["m", "f"]}
        />
        <Input
          id="phone"
          onChange={formik.handleChange}
          disabled={overview}
          outlined
          placeholder="+234"
          label="Phone NUmber"
        />
        <Select
          id="zone"
          onChange={formik.handleChange}
          disabled={overview}
          label="Zone"
          options={["f", "d"]}
        />
        <Select
          id="state"
          onChange={formik.handleChange}
          disabled={overview}
          label="State"
          options={["d", "d"]}
        />
        {overview && <EditButton />}
      </div>
    </div>
  );
}

export default Section1;

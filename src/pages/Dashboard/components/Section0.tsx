import React, { useEffect } from "react";
import Select from "../../../components/Select";
import { RegularText } from "../../../components/Common";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { setMembership } from "../../../redux/user/userDetailSlice";
const options = ["Member", "Non-member"];
function Section0() {
  const dispatch = useDispatch();
  const initialValues = {
    membership: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (val) => {
      dispatch(
        setMembership({
          membership: val.membership,
        })
      );
      console.log(val)
    },
  });
  useEffect(()=>{
   return ()=>{
     formik.handleSubmit()
   }
  },[])

  return (
    <div className="section_0">
      <RegularText text="Kindly Select your Membership category and upload supporting document to get started " />
      <Select
        id="membership"
        onChange={formik.handleChange}
        options={options}
        placeholder="Please Select Category"
        style={{
          width: "80%",
        }}
        label="Select Category"
      />

      <span className="asteric">
        ***Requirements
      </span>
    </div>
  );
}

export default Section0;

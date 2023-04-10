import React, { useEffect } from "react";
import Select from "../../../components/Select";
import { RegularText } from "../../../components/Common";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { setMembership } from "../../../redux/user/userDetailSlice";
import Button from "../../../components/Button";
const options = ["Member", "Non-member"];
interface Section0Props{
  gotoNext?:()=>void
}
function Section0({gotoNext}:Section0Props) {
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
    },
  });
  // useEffect(()=>{
  //  return ()=>{
  //    formik.handleSubmit()
  //  }
  // },[])

  return (
    <>
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
     <Button style={{
      height:30,
      width:100,
      marginTop:20,
      marginLeft:10
    }} onClick={()=>{
      formik.handleSubmit()
      gotoNext?.()
    }} label="Next"/>
    </>
  );
}

export default Section0;

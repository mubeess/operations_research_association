import React, { useEffect, useState } from "react";
import Select from "../../../components/Select";
import { RegularText } from "../../../components/Common";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { setMembership } from "../../../redux/user/userDetailSlice";
import Button from "../../../components/Button";
import query from "../../../helpers/query";

function Section0({ gotoNext }) {
  const dispatch = useDispatch();
  const [memBershipOptions, setMemOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  // const data=useSelector(data=>data)
  useEffect(() => {
    const memberships = [];
    query({ method: "GET", bodyData: {}, url: "/membership-category" }).then(
      (data) => {
        setMemOptions(data.data.data);
        data.data.data.map((mem) => memberships.push(mem.membershipCat));
        setOptions(memberships);
      }
    );
  }, []);
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

  return (
    <>
      <div className="section_0">
        <RegularText text="Kindly Select your Membership category and upload supporting document to get started " />
        <Select
          id="membership"
          onChange={(e) => {
            const filtered = memBershipOptions.filter(
              (mem) => mem.membershipCat == e.currentTarget.value
            );
            if (filtered.length>0) {
              setSelected(filtered);
            }else{
              setSelected(null)
            }
            
            
            formik.handleChange(e);
          }}
          options={options}
          placeholder="Please Select Category"
          style={{
            width: "80%",
          }}
          label="Select Category"
        />

        <span className="asteric">***Requirements</span>
        {selected !== null && (
          <>
            <h3>{`Desc:${selected[0].description}`}</h3>
            <p>{`Price:N${selected[0].price}`}</p>
          </>
        )}
      </div>
      <Button
        style={{
          height: 30,
          width: 100,
          marginTop: 20,
          marginLeft: 10,
        }}
        onClick={() => {
          formik.handleSubmit();
          gotoNext?.()
        }}
        label="Next"
      />
    </>
  );
}

export default Section0;

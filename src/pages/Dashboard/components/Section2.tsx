import React, { useEffect, useState } from "react";
import "./styles/section2.css";
import Input from "../../../components/Input";
import AddButton from "../../../components/AddButton";
import { Header } from "../../../components/Common";
import DeleteButton from "../../../components/DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { FieldArray, Formik, FormikProvider, useFormik } from "formik";
import Button from "../../../components/Button";
import { setEducatioanlQualification } from "../../../redux/user/userDetailSlice";
interface initialStateProp {
  initial: [any] | any;
}
interface Sec2Props {
  onSend: (val: any) => void;
}
const initalState: initialStateProp["initial"] = [];
function Section2() {
  const dispatch = useDispatch();
  const initialValues = {
    qualification: [
      {
        institution: "Mau",
        from: "2021",
        to: "2022",
        qualificationObtained: "Btech",
      },
    ],
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (val) => {
      dispatch(
        setEducatioanlQualification({
          educationalQualification: [...val.qualification],
        })
      );
    },
  });

  // const user = useSelector((user: RootState) => user.userDetail);

  useEffect(() => {
    return () => {
      formik.handleSubmit();
    };
  }, []);
  return (
    <div className="section2_main">
      <Header text="SECTION B: Educational Qualification" />
      <FormikProvider value={formik}>
        <div className="section2_container">
          <FieldArray
            name="qualification"
            render={(arrayHelpers) => {
              const qualifications = formik.values.qualification;
              return (
                <>
                  {qualifications.length > 0
                    ? qualifications.map((item, index) => (
                        <div className="sec2_inputs" key={index.toString()}>
                          <Input
                            {...formik.getFieldProps(
                              `qualification.${index}.institution`
                            )}
                            onChange={formik.handleChange}
                            style={{
                              width: "30%",
                            }}
                            outlined
                            label="Institution Attend "
                            placeholder="Enter the name of institution attend"
                          />
                          <Input
                            {...formik.getFieldProps(
                              `qualification.${index}.from`
                            )}
                            onChange={formik.handleChange}
                            outlined
                            type="date"
                            label="From"
                          />
                          <Input
                            {...formik.getFieldProps(
                              `qualification.${index}.to`
                            )}
                            onChange={formik.handleChange}
                            outlined
                            type="date"
                            label="To"
                          />
                          <Input
                            {...formik.getFieldProps(
                              `qualification.${index}.qualificationObtained`
                            )}
                            onChange={formik.handleChange}
                            outlined
                            type="text"
                            label="Qualification Obtained"
                          />
                          {index == qualifications.length - 1 && (
                            <AddButton
                              onClick={() =>
                                arrayHelpers.push({
                                  institution: "o",
                                  from: "2",
                                  to: "2",
                                  qualificationObtained: "2",
                                })
                              }
                            />
                          )}
                          {index !== qualifications.length - 1 && (
                            <DeleteButton
                              onClick={() => arrayHelpers.remove(index)}
                            />
                          )}
                        </div>
                      ))
                    : null}
                </>
              );
            }}
          />
          {/* <Button
                onClick={() => console.log(values, "===")}
                style={{ width: "30%", marginBottom: 20 }}
                label="Save"
              /> */}
              <Button style={{
        width:'50%'
      }} onClick={()=>{
        formik.handleSubmit()
      }} label="Add Data"/>
        </div>
      </FormikProvider>
      
    </div>
  );
}

export default Section2;

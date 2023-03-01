import React, { useEffect, useState } from "react";
import "./styles/section2.css";
import Input from "../../../components/Input";
import AddButton from "../../../components/AddButton";
import { Header } from "../../../components/Common";
import DeleteButton from "../../../components/DeleteButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { FieldArray, Formik, useFormik } from "formik";
import Button from "../../../components/Button";
interface initialStateProp {
  initial: [any] | any;
}
interface qualificationsProp {
  institution: string;
  from: string;
  to: string;
  qualificationObtained: string;
}
[];

const initalState: initialStateProp["initial"] = [];
function Section2() {
  const [listItem, setListItem] = useState(initalState);
  const [valuesArray, setValues] = useState([initalState]);
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

  const user = useSelector((user: RootState) => user.userDetail);

  // useEffect(()=>{
  // return ()=>{
  //   formik.handleSubmit()
  //   console.log(valuesArray,'valArrrr')
  // }
  // },[])
  return (
    <div className="section2_main">
      <Header text="SECTION B: Educational Qualification" />
      <div className="section2_container">
        <Formik
          initialValues={initialValues}
          onSubmit={(val) => {
            console.log(val);
          }}
        >
          {({ values, handleChange }) => (
            <>
              <FieldArray
                name="qualification"
                render={(arrayHelpers) => {
                  const qualifications = values.qualification;
                  return (
                    <>
                      {qualifications.length > 0
                        ? qualifications.map((item, index) => (
                            <div className="sec2_inputs" key={index.toString()}>
                              <Input
                                id={`qualification.${index}.institution`}
                                onChange={handleChange}
                                style={{
                                  width: "30%",
                                }}
                                outlined
                                label="Institution Attend "
                                placeholder="Enter the name of institution attend"
                              />
                              <Input
                                id={`qualification.${index}.from`}
                                onChange={handleChange}
                                outlined
                                type="date"
                                label="From"
                              />
                              <Input
                                id={`qualification.${index}.to`}
                                onChange={handleChange}
                                outlined
                                type="date"
                                label="To"
                              />
                              <Input
                                id={`qualification.${index}.qualificationObtained`}
                                onChange={handleChange}
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
              <Button
                onClick={() => console.log(values, "===")}
                style={{ width: "30%", marginBottom: 20, marginLeft: 100 }}
                label="Save"
              />
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Section2;

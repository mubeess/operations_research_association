import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Common";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import AddButton from "../../../components/AddButton";
import Sample from "../../../assets/Images/sample.png";
import DeleteButton from "../../../components/DeleteButton";
import { FieldArray, Formik, FormikProvider, useFormik } from "formik";
import Button from "../../../components/Button";
import query from "../../../helpers/query";
import Alert from "../../../components/Alert";
import { useDispatch } from "react-redux";
import { setEducatioanlQualification, setSupportingDocs } from "../../../redux/user/userDetailSlice";
import Loading from "../../../components/Loading";

function Section3({ gotoNext }) {
  // const [listItem, setListItem] = useState(initalState);
  const [imagesArray, setImages] = useState([]);
  const [alertText, setAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    documents: [
      {
        docType: "",
        doc: {
          secureUrl: "",
          publicID: "",
        },
      },
    ],
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
      console.log(val, "-----");
      dispatch(
        setSupportingDocs({
          supportingDocs: val.documents,
        })
      );
      dispatch(
        setEducatioanlQualification({
          educationalQualification: [...val.qualification],
        })
      );
    },
  });
 

  return (
    <>

<>
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
                                width: window.innerWidth > 767 ? "30%" : "100%",
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
          </div>
        </FormikProvider>
      </div>
    </>





      <div className="section3_main">
        <Alert text={alertText} />
        <FormikProvider value={formik}>
          <Header text="SECTION C: Upload supporting documents" />
          <Loading loading={loading} />
          <>
            <FieldArray
              name="documents"
              render={(arrayHelpers) => (
                <div className="sec3_container">
                  {formik.values.documents.length > 0 &&
                    formik.values.documents.map((doc, index) => {
                      return (
                        <div key={index.toString()} className="sec3_inputs">
                          <div className="sec2_inputs">
                            <Select
                              {...formik.getFieldProps(
                                `documents.${index}.docType`
                              )}
                              id={`documents.${index}.docType`}
                              name={`documents.${index}.docType`}
                              onChange={formik.handleChange}
                              style={{
                                width: window.innerWidth > 767 ? "15%" : "100%",
                              }}
                              placeholder="Select Doc"
                              label="Document type"
                              options={["Degree Cert", "Msc Cert", "Phd Cert"]}
                            />
                            <Input
                              onChange={(e) => {
                                const formData = new FormData();
                                const files = e.target.files;
                                files?.length &&
                                  formData.append("file", files[0]);
                                console.log(files[0]);
                                setLoading(true);
                                // const response= await query({url:'/file',method:'POST',bodyData:formData})
                                fetch("https://oridsan.fly.dev/api/v1/file", {
                                  method: "POST",
                                  body: formData,
                                })
                                  .then((response) => response.json())
                                  .then((data) => {
                                    if (data.success) {
                                      formik.values.documents[
                                        `${index}`
                                      ].doc.publicID = data.data.publicID;
                                      formik.values.documents[
                                        `${index}`
                                      ].doc.secureUrl = data.data.secureUrl;
                                      setImages((prev) => [
                                        ...prev,
                                        data.data.secureUrl,
                                      ]);
                                    }
                                    setLoading(false);
                                    setAlert(data.message);
                                    setTimeout(() => {
                                      setAlert("");
                                    }, 2000);
                                  })
                                  .catch((error) => {
                                    setLoading(false);
                                    console.error(
                                      "Error uploading file:",
                                      error
                                    );
                                  });
                                
                              }}
                              outlined
                              type="file"
                              label="Upload document"
                            />
                            <div className="sec3_btn">
                              {index == formik.values.documents.length - 1 ? (
                                <AddButton
                                  onClick={() =>
                                    arrayHelpers.push({
                                      docType: "",
                                      doc: {
                                        secureUrl: "",
                                        publicID: "",
                                      },
                                    })
                                  }
                                />
                              ) : (
                                <DeleteButton
                                  onClick={() => arrayHelpers.remove(index)}
                                />
                              )}
                            </div>
                          </div>
                          {imagesArray.length >= index + 1 && (
                            <div className="sec3_img">
                              <img src={imagesArray[index]} alt="img" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              )}
            />
          </>
        </FormikProvider>
      </div>
      <Button
        style={{
          width: 70,
          marginTop: 20,
          marginLeft: 10,
        }}
        onClick={() => {
          formik.handleSubmit();
          gotoNext();
        }}
        label="Next"
      />
    </>
  );
}

export default Section3;

// {listItem.map((item: any) => (
//   <div className="sec3_inputs">
//     <div className="sec2_inputs">
//       <Select
//         style={{ width: "15%" }}
//         placeholder="Select Doc"
//         label="Document type"
//         options={["me", "me"]}
//       />
//       <Input
//         onChange={() => {}}
//         outlined
//         type="file"
//         label="Upload document"
//       />
//       <div className="sec3_btn">
//         <DeleteButton onClick={() => onRemove(item.id)} />
//       </div>
//     </div>

//     <div className="sec3_img">
//       <img src={Sample} alt="img" />
//     </div>
//   </div>
// ))}

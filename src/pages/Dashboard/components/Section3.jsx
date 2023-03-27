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
import { setSupportingDocs } from "../../../redux/user/userDetailSlice";

function Section3() {
  // const [listItem, setListItem] = useState(initalState);
  const [imagesArray, setImages] = useState([]);
  const [alertText, setAlert] = useState("");
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
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (val) => {
      console.log(val,'-----');
      dispatch(setSupportingDocs({
        supportingDocs:val.documents
      }));
      
    },
  });
  useEffect(() => {
    // return function () {
    //   formik.handleSubmit();
    // };
  }, []);

  return (
    <div className="section3_main">
      <Alert text={alertText} />
      <FormikProvider value={formik}>
        <Header text="SECTION C: Upload supporting documents" />
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
                            style={{ width: "15%" }}
                            placeholder="Select Doc"
                            label="Document type"
                            options={["Degree Cert", "Msc Cert", "Phd Cert"]}
                          />
                          <Input
                            onChange={(e) => {
                              console.log('changing')
                              const formData = new FormData();
                              const files = e.target.files;
                              files?.length &&
                                formData.append("file", files[0]);
                                console.log(files[0])

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
                                  console.log(data)
                                  setAlert(data.message);
                                  setTimeout(() => {
                                    setAlert("");
                                  }, 2000);
                                })
                                .catch((error) => {
                                  console.error("Error uploading file:", error);
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
                  <Button onClick={()=>{
          formik.handleSubmit()
        }} label="Add Data"/>
              </div>
            )}
          />
        </>
        
      </FormikProvider>
    </div>
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

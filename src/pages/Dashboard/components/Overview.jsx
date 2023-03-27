import React, { useEffect } from "react";
import "./styles/overview.css";
import { Header } from "../../../components/Common";
import Section1 from "./Section1";
import Passport from "../../../assets/Images/sample.png";
import EditButton from "../../../components/EditButton";
import Section2 from "./Section2";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import query from "../../../helpers/query";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/user/userSlice";
import { setEducatioanlQualification, setPersonalDetails, setSupportingDocs } from "../../../redux/user/userDetailSlice";

function Overview() {
  const data = useSelector((state) => state);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(() => {
    console.log(data, "my-data");
  }, []);
  return (
    <div className="overview-container">
      <Header text="Summary Review" />
      <div className="review-1">
        <div className="personal-rev">
          <Section1 overview />
        </div>
        <div className="passport-rev">
          <img src={Passport} />
          <EditButton />
        </div>
      </div>
      <Header
        style={{ marginBottom: 20 }}
        text="SECTION B: Educational Qualification"
      />
      <div className="review-2">
        {data.userDetail.educationalQualification.map((detail, index) => (
          <div className="sec2_inputs" key={index}>
            <Input
              onChange={() => {}}
              disabled
              style={{
                width: "30%",
              }}
              outlined
              label="Institution Attend "
              placeholder={detail.institution}
            />
            <Input
              onChange={() => {}}
              disabled
              outlined
              type="date"
              label="From"
              placeholder={detail.from}
            />
            <Input
              onChange={() => {}}
              disabled
              outlined
              type="date"
              label="To"
              placeholder={detail.to}
            />
            <Input
              onChange={() => {}}
              disabled
              outlined
              label="Qualification Obtained"
              placeholder={detail.qualificationObtained}
            />
          </div>
        ))}
        <EditButton />
      </div>
      <Header
        style={{ marginBottom: 20 }}
        text="SECTION C: Upload supporting documents"
      />

      <div className="review-3">
        {data.userDetail.supportingDocs.map((detail, index) => (
          <div className="selected-doc" key={index}>
            <Select
              style={{ width: "100%" }}
              disabled
              label="document type"
              placeholder={detail.docType}
              options={[]}
            />
            <img src={detail.doc.secureUrl} />
          </div>
        ))}

        <EditButton />
      </div>
      <div className="agree">
        <input type="checkbox" />
        <span className="highlight">
          By clicking on submit you agree that all information provided are
          correct
        </span>
      </div>
      <Button
        onClick={() => {
          let newPersonal = { ...data.userDetail.personalDetails };
          newPersonal.passport = {
            secureUrl: "none",
            publicID:'none'
          };
          const bodyData = {
            personalDetails: newPersonal,
            educationalQualification: data.userDetail.educationalQualification,
            supportingDoc: data.userDetail.supportingDocs,
            membershipCat: data.userDetail.membership,
          };
          query({
            method: "POST",
            url: "/users/application",
            bodyData,
            token: data.user.user.token,
          }).then((response) => {
            if (response.success) {
              dispatch(
                setUser({
                  user: {
                    isLoggedIn: true,
                    firstName: response.data.data.personalDetails.firstName,
                    email: response.data.data.personalDetails.email,
                    lastName: response.data.data.personalDetails.lastName,
                    token:data.user.user.token,
                    isNew:false
                  },
                })
              );
              dispatch(
                setPersonalDetails({
                  personalDetails: response.data.data.personalDetails
                })
              );
              dispatch(
                setSupportingDocs({
                  supportingDocs: response.data.data.supportingDoc,
                })
              );
              dispatch(
                setEducatioanlQualification({
                  educationalQualification:
                    response.data.data.educationalQualification,
                })
              );
              navigate("/dashboard");
            }
            console.log(data);
          });
        }}
        style={{
          width: 200,
          marginTop: 10,
        }}
        label="Submit"
      />
    </div>
  );
}

export default Overview;

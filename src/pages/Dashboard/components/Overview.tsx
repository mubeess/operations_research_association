import React from "react";
import "./styles/overview.css";
import { Header } from "../../../components/Common";
import Section1 from "./Section1";
import Passport from "../../../assets/Images/sample.png";
import EditButton from "../../../components/EditButton";
import Section2 from "./Section2";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
function Overview() {
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
        <div className="sec2_inputs">
          <Input
            onChange={() => {}}
            disabled
            style={{
              width: "30%",
            }}
            outlined
            label="Institution Attend "
            placeholder="Enter the name of institution attend"
          />
          <Input
            onChange={() => {}}
            disabled
            outlined
            type="date"
            label="From"
          />
          <Input onChange={() => {}} disabled outlined type="date" label="To" />
          <Input
            onChange={() => {}}
            disabled
            outlined
            type="file"
            label="Qualification Obtained"
          />
        </div>
        <div className="sec2_inputs">
          <Input
            onChange={() => {}}
            disabled
            style={{
              width: "30%",
            }}
            outlined
            label="Institution Attend "
            placeholder="Enter the name of institution attend"
          />
          <Input
            onChange={() => {}}
            disabled
            outlined
            type="date"
            label="From"
          />
          <Input onChange={() => {}} disabled outlined type="date" label="To" />
          <Input
            onChange={() => {}}
            disabled
            outlined
            type="file"
            label="Qualification Obtained"
          />
        </div>
        <div className="sec2_inputs">
          <Input
            onChange={() => {}}
            disabled
            style={{
              width: "30%",
            }}
            outlined
            label="Institution Attend "
            placeholder="Enter the name of institution attend"
          />
          <Input
            onChange={() => {}}
            disabled
            outlined
            type="date"
            label="From"
          />
          <Input onChange={() => {}} disabled outlined type="date" label="To" />
          <Input
            onChange={() => {}}
            disabled
            outlined
            type="file"
            label="Qualification Obtained"
          />
        </div>
        <EditButton />
      </div>
      <Header
        style={{ marginBottom: 20 }}
        text="SECTION C: Upload supporting documents"
      />
      <div className="review-3">
        <div className="selected-doc">
          <Select
            style={{ width: "100%" }}
            disabled
            label="document type"
            placeholder="FLSC"
            options={[]}
          />
          <img src={Passport} />
        </div>
        <div className="selected-doc">
          <Select
            style={{ width: "100%" }}
            disabled
            label="document type"
            placeholder="FLSC"
            options={[]}
          />
          <img src={Passport} />
        </div>
        <div className="selected-doc">
          <Select
            style={{ width: "100%" }}
            disabled
            label="document type"
            placeholder="FLSC"
            options={[]}
          />
          <img src={Passport} />
        </div>
        <EditButton />
      </div>
      <div className="agree">
        <input type="checkbox" />
        <span className="highlight">
          By clicking on submit you agree that all information provided are
          correct
        </span>
      </div>
    </div>
  );
}

export default Overview;

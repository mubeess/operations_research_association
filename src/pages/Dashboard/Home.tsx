import React from "react";
import "../styles/home.css";
import { Header, RegularText } from "../../components/Common";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
const options=['Member','Non-member']
function Home() {
  return (
    <div className="home_container">
      <div className="section_0">
        <RegularText text="Kindly Select your Membership category and upload supporting document to get started " />
        <Select
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
      <Button
        style={{
          width: 100,
          marginTop: 20,
        }}
        label="Next"
      />
    </div>
  );
}

export default Home;

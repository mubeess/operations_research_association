import React from "react";
import "./styles/section1.css";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { Header } from "../../../components/Common";
import EditButton from "../../../components/EditButton";
import { useSelector } from "react-redux";
interface Section1Props {
  overview?: boolean;
}
function Section1({ overview = false }: Section1Props) {
  const user=useSelector(user=>user)
  return (
    <div className="section1_container">
      <Header text="SECTION A: Personal Details" />
      <div
        style={{
          width: overview ? "90%" : "70%",
        }}
        className="main_container"
      >
        <Input onChange={()=>{
          
        }} disabled={overview} outlined label="First Name" />
        <Input onChange={()=>{
          
        }} disabled={overview} outlined label="Last Name" />
        <Input onChange={()=>{
          
        }} disabled={overview} outlined label="Middle Name" />
        <Input onChange={()=>{
          
        }} disabled={overview} outlined label="D.O.B" type="date" />
        <Input onChange={()=>{
          
        }}
          placeholder="sample@mail.com"
          disabled
          outlined
          label="Email Address"
          style={{ gridColumn: "1/3" }}
        />
        <Select onChange={()=>{}} disabled={overview} label="Gender" options={["m", "f"]} />
        <Input onChange={()=>{
          
        }}
          disabled={overview}
          outlined
          placeholder="+234"
          label="Phone NUmber"
        />
        <Select onChange={()=>{}} disabled={overview} label="Zone" options={["f", "d"]} />
        <Select onChange={()=>{}} disabled={overview} label="State" options={["d", "d"]} />
        {overview && <EditButton/>}
      </div>
    </div>
  );
}

export default Section1;

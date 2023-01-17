import React from "react";
import "./styles/section1.css";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { Header } from "../../../components/Common";
function Section1() {
  return (
    <div className="section1_container">
      <Header text="SECTION A: Personal Details"/>
      <div className="main_container">
        <Input outlined label="First Name" />
        <Input outlined label="Last Name" />
        <Input outlined label="Middle Name" />
        <Input outlined label="D.O.B" type='date'/>
        <Input placeholder="sample@mail.com" disabled outlined label="Email Address" style={{gridColumn:'1/3'}}/>
        <Select label="Gender" options={['m','f']}/>
        <Input outlined placeholder="+234" label="Phone NUmber"/>
        <Select label="Zone" options={['f','d']}/>
        <Select label="State" options={['d','d']}/>
      </div>
    </div>
  );
}

export default Section1;

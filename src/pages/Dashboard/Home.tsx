import React, { useState } from "react";
import "../styles/home.css";
import Button from "../../components/Button";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Overview from "./components/Overview";
import FinalStaus from "./components/FinalStaus";
const initialState = [{ id: "1" }];
function Home() {
  const [sect2Educatio, setSec2Ed] = useState(initialState);
  return (
    <div className="home_container">
      {/* <Section0/> */}
      {/* <Section1/> */}
      {/* <Section2/>
      <Section3/> */}
      {/* <Overview/> */}
      <FinalStaus/>

{/* 
      <Button
        style={{
          width: 100,
          marginTop: 20,
        }}
        label="Next"
      /> */}
    </div>
  );
}

export default Home;

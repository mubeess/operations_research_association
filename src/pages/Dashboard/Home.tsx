import React from "react";
import "../styles/home.css";
import Button from "../../components/Button";
import Section1 from "./components/Section1";

function Home() {
  return (
    <div className="home_container">
     {/* <Section0/> */}
     <Section1/>

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

import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Button from "../../components/Button";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Overview from "./components/Overview";
import FinalStaus from "./components/FinalStaus";
import Section0 from "./components/Section0";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Home() {
  const user = useSelector((state) => state.user);
  const [currentIndex, setCurrent] = useState(user.user.isNew ? 0 : 4);
  const navigate = useNavigate()

  console.log(user.user.isLoggedIn)
  useEffect(()=> {
    if(user.user.isLoggedIn === false) navigate('/')
  },[])
  
  function Conditional() {
    switch (currentIndex) {
      case 0:
        return (
          <Fade>
            <Section0 gotoNext={()=>{
              setCurrent(1)
            }} />
          </Fade>
        );
      case 1:
        return (
          <Fade>
            <Section1 gotoNext={()=>{
              setCurrent(2)
            }} />
          </Fade>
        );
      case 2:
        return (
          <Fade>
            <Section3 gotoNext={()=>{
              setCurrent(3)
            }} />
          </Fade>
        );
      case 3:
        return (
          <Fade>
            <Overview gotoPage={(val)=>{
              setCurrent(val)
            }} />
          </Fade>
        );
      case 4:
        return (
          <Fade>
            <FinalStaus />
          </Fade>
        );
      default:
        return (
          <Fade>
            <FinalStaus />
          </Fade>
        );
    }
  }
  return (
    <div className="home_container">
      {<Conditional />}
    </div>
  );
}

export default Home;

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
import { RootState } from "../../redux/store";
const initialState = [{ id: "1" }];
function Home() {
  const user = useSelector((state: RootState) => state.user);
  // const data = useSelector((state: RootState) => state);
  const [currentIndex, setCurrent] = useState(user.user.isNew ? 0 : 4);

  function Conditional() {
    switch (currentIndex) {
      case 0:
        return (
          <Fade>
            <Section0 />
          </Fade>
        );
      case 1:
        return (
          <Fade>
            <Section1 />
          </Fade>
        );
      case 2:
        return (
          <Fade>
            <Section2 />
            <Section3 />
          </Fade>
        );
      case 3:
        return (
          <Fade>
            <Overview />
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
      {currentIndex != 4 && currentIndex != 3 && (
        <Button
          onClick={() => {
            setCurrent(currentIndex + 1);
          }}
          style={{
            width: 100,
            marginTop: 20,
          }}
          label={`${currentIndex == 3 ? "Submit" : "Next"}`}
        />
      )}
    </div>
  );
}

export default Home;

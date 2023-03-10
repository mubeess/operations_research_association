import React from "react";
import "./styles/certificate.css";
import Logo from "../../../assets/Images/or_logo.png";
import Sign from "../../../assets/Images/sign.png";
import Qr from "../../../assets/Images/qr.png";
import Certify from "../../../assets/Images/cert.png";
import Bg from '../../../assets/Images/or-bg.png'
import { Header } from "../../../components/Common";
function Certificate() {
  return (
    <div className="certificate-container">
      <div className="cert-bar"></div>
      <div className="main-cert">
        <img id="bg" src={Bg}/>
        <img id="logo" src={Logo} />
        <Header
          style={{ color: "var(--primary)", textAlign: "center" }}
          text="OPERATIONS RESEARCH INSTITUTE FOR DECISION SCIENCE & ANALYTICS OF NIGERIA "
        />
        <Header
          style={{ textAlign: "center", marginTop: 20 }}
          text="MEMBERSHIP CERTIFICATE"
        />
        <div className="certify">
          <img id="certify" src={Certify} />
          <Header
            style={{
              position: "absolute",
              right: 0,
              marginRight: 30,
            }}
            text="NO:85634"
          />
        </div>
        <div className="cert-name">
          <Header text="UMAR MUHAMMAD MODIBBO" />
        </div>
        <div className="other-txt">
          <span>was on this day</span>
          <span className="txt-dashed">20th Jan, 2023</span>
          <span>admitted to the grade of</span>
          <span className="txt-dashed">Associate Fellow</span>
        </div>
        <span id="desc">
          in accordance with the provisions of the articles of the Operation
          Research Institute for Decisions Science & Analytics of Nigeria and
          consequently has the right to the designation of
        </span>
        <div className="cert-title">
        <Header text="AFIOR"/>
        </div>
        <div className="cert-val">
            <span className="label">MEMBERSHIP NO:</span>
            <Header text="AF/21/18017"/>
        </div>
        <div className="cert-val">
            <span className="label">Validity:</span>
            <Header text="DEC 2029"/>
        </div>

        <div className="sign-qr">
            <div className="sign">
                <img src={Sign}/>
                <span>( Dr Umar Muhammad Modibbo)</span>
                <Header text="President"/>
            </div>
            <img src={Qr} alt=""/>
            <div className="sign">
                <img src={Sign}/>
                <span>( Dr KelvinMoses, CNMS, PhD)</span>
                <Header text="Registrar"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;

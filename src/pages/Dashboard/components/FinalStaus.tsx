import React from "react";
import "./styles/final.css";
import Logo from "../../../assets/Images/or_logo.png";
import { Header } from "../../../components/Common";
function FinalStaus() {
  return (
    <div className="final_container">
      <div className="membership">
        <div className="membership-number">
          <Header text="MEMBERSHIP NUMBER" />
          <Header
            style={{ color: "var(--primary)", marginTop: 20 }}
            text="AF/21/09853AF"
          />
          <div className="status">
            <span className="status-label">Status :</span>
            <span className="status-val">Approved</span>
          </div>
          <div className="status">
            <span className="status-label">Certificate Validity :</span>
            <span className="status-val">DEC 2027</span>
          </div>
          <a href="">View Certificate</a>
        </div>
        <div className="membership-detail">
          <div className="mem-bg">
            <img src={Logo} />
          </div>
          <div className="main-detal">
            <div className="fields">
              <span className="label-name">Name</span>
              <span className="label-value">Mubarak ibrahim bello</span>
            </div>
            <div className="fields">
              <span className="label-name">Category</span>
              <span className="label-value">Mubarak ibrahim bello</span>
            </div>
            <div className="fields">
              <span className="label-name">State</span>
              <span className="label-value">Mubarak ibrahim bello</span>
            </div>
            <div className="fields">
              <span className="label-name">Phone Number</span>
              <span className="label-value">09899499949</span>
            </div>
            <div className="fields">
              <span className="label-name">Mail</span>
              <span className="label-value">Mubarajjdjj@jjjs</span>
            </div>
          </div>
          <img
            id="passport"
            src="https://www.pngitem.com/pimgs/m/264-2640465_passport-size-photo-sample-hd-png-download.png"
          />
        </div>
      </div>
    </div>
  );
}

export default FinalStaus;

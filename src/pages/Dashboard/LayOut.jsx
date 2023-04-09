import React, { DOMElement, useRef } from "react";
import "../styles/layout.css";
import Logo from "../../assets/Images/or_logo.png";
import User from "../../assets/Svg/user.svg";
import { Outlet, useLocation } from "react-router-dom";
import NavLink from "../../components/NavLink";
import Drawer from "../../assets/Svg/drawer.svg";
import { FolderIcon } from "../../assets/Svg/Index";
function LayOut() {
  const location = useLocation();
  const asideRef = useRef < HTMLElement > null;
  return (
    <div className="layout_container">
      <div className="layout_nav">
        <img className="layout_logo" src={Logo} alt="img" />
        <img className="layout_user" src={User} alt="img" />
        <img
          onClick={() => {
            if (window.innerWidth <= 767) {
              asideRef.current.style.width = "100vw";
            }
          }}
          className="drawer_bar"
          src={Drawer}
          alt="img"
        />
      </div>
      <div className="layout_body">
        <div ref={asideRef} className="layout_aside">
          <NavLink
            onClick={() => {
              if (window.innerWidth <= 767) {
                asideRef.current.style.width = "0px";
              }
            }}
            label="Overview"
            route="/dashboard"
            Icon={() => (
              <FolderIcon active={location.pathname == "/dashboard"} />
            )}
          />
          <NavLink
            onClick={() => {
              if (window.innerWidth <= 767) {
                asideRef.current.style.width = "0px";
              }
            }}
            label="Certificate"
            route="/dashboard/certificate"
            Icon={() => (
              <FolderIcon
                active={location.pathname == "/dashboard/certificate"}
              />
            )}
          />

          <NavLink
            onClick={() => {
              if (window.innerWidth <= 767) {
                asideRef.current.style.width = "0px";
              }
            }}
            label="Payment Logs"
            route="/dashboard/payment"
            Icon={() => (
              <FolderIcon active={location.pathname == "/dashboard/payment"} />
            )}
          />

          <NavLink
            onClick={() => {
              if (window.innerWidth <= 767) {
                asideRef.current.style.width = "0px";
              }
            }}
            label="Seminars/Conferences"
            route="/dashboard/seminars"
            Icon={() => (
              <FolderIcon active={location.pathname == "/dashboard/seminars"} />
            )}
          />
          {/* <NavLink/>
          <NavLink/>
          <NavLink/> */}
        </div>
        <div className="layout_main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayOut;

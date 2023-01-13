import React from "react";
import "../styles/layout.css";
import Logo from "../../assets/Images/or_logo.png";
import User from "../../assets/Svg/user.svg";
import { Outlet, useLocation } from "react-router-dom";
import NavLink from "../../components/NavLink";
import { FolderIcon } from "../../assets/Svg/Index";

function LayOut() {
  const location = useLocation();
  return (
    <div className="layout_container">
      <div className="layout_nav">
        <img className="layout_logo" src={Logo} alt="img" />
        <img className="layout_user" src={User} alt="img" />
      </div>
      <div className="layout_body">
        <div className="layout_aside">
          <NavLink
            label="Overview"
            route="/dashboard"
            Icon={() => (
              <FolderIcon active={location.pathname == "/dashboard"} />
            )}
          />
          <NavLink
            label="Certificate"
            route="/dashboard/certificate"
            Icon={() => (
              <FolderIcon
                active={location.pathname == "/dashboard/certificate"}
              />
            )}
          />

          <NavLink
            label="Payment Logs"
            route="/dashboard/payment"
            Icon={() => (
              <FolderIcon
                active={location.pathname == "/dashboard/payment"}
              />
            )}
          />

          <NavLink
            label="Seminars/Conferences"
            route="/dashboard/seminars"
            Icon={() => (
              <FolderIcon
                active={location.pathname == "/dashboard/seminars"}
              />
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

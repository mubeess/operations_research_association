import React from "react";
import "./styles/navlink.css";
import { NavLinkProps } from "./types";
import { useLocation, useNavigate } from "react-router-dom";
function NavLink({ label, Icon, route,onClick }: NavLinkProps) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(route);
        onClick?.()
      }}
      className={`nav_link ${location.pathname == route ? "active" : null}`}
    >
      <Icon />
      
      <span
        style={{
          color: location.pathname == route ? "white" : "black",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default NavLink;

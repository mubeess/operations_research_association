import React, { DOMElement, useRef } from "react";
import "../styles/layout.css";
import Logo from "../../assets/Images/or_logo.png";
import User from "../../assets/Svg/user.svg";
import { Outlet, useLocation } from "react-router-dom";
import NavLink from "../../components/NavLink";
import Drawer from "../../assets/Svg/drawer.svg";
import { FolderIcon } from "../../assets/Svg/Index";
import {AiOutlineFileText} from 'react-icons/ai'
import {PaymentIcon, SeminarIcon} from '../../assets/Svg/Index'
import {HiLogout} from 'react-icons/hi'
import { setUser } from "../../redux/user/userSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function LayOut() {
  const location = useLocation();
  const asideRef = useRef();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () =>{
    dispatch(
      setUser({
        user: {
          isLoggedIn: false,
        },
      })
    );

    navigate('/')
  } 


  return (
    <div className="layout_container">
      <div className="layout_nav">
        <img className="layout_logo" src={Logo} alt="img" />
        <HiLogout onClick={logOut}
        className="mr-[40px] h-7 w-7 p-1 rounded-full hover:shadow-lg cursor-pointer"/>
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
              <AiOutlineFileText className="text-[30px]"
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
              <PaymentIcon active={location.pathname == "/dashboard/payment"} />
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
              <SeminarIcon active={location.pathname == "/dashboard/seminars"} />
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

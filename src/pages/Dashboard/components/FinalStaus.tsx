import React, { useEffect } from "react";
import "./styles/final.css";
import Logo from "../../../assets/Images/or_logo.png";
import { Header } from "../../../components/Common";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";
function FinalStaus() {
  const data = useSelector((data: RootState) => data);

  return (
    <div className="final_container">
      <div className="membership">
        {data.user.user.status != "Pending" ? (
          <div className="membership-number">
            <Header text="MEMBERSHIP NUMBER" />
            <Header
              style={{ color: "var(--primary)", marginTop: 20 }}
              text={`${data.user.user.membershipNumber}`}
            />
            <div className="status">
              <span className="status-label">Status :</span>
              <span className="status-val">Approved</span>
            </div>
            <div className="status">
              <span className="status-label">Certificate Validity :</span>
              <span className="status-val">
                {data.user.user.paid
                  ? data.user.user.cert.validity
                  : "Not Yet Paid"}
              </span>
            </div>

            <Link to="/dashboard/certificate">
              {data.user.user.paid ? "View Certificate" : "Get Certificate"}
            </Link>
          </div>
        ) : (
          <div className="main-status">
            <Header text="MEMBERSHIP NUMBER" />
            <Header
              style={{ color: "var(--red)", marginTop: 10 }}
              text="applicaton under review"
            />
            <div className="status">
              <span className="status-label">Status :</span>
              <span className="status-val">{data.user.user.status}</span>
            </div>
            <div className="status">
              <span className="status-label">Certificate Validity :</span>
              <span className="status-val">Not Yet</span>
            </div>
            <Link to="/dashboard/certificate">Get certificate now</Link>
          </div>
        )}
        <div className="membership-detail">
          <div className="mem-bg">
            <img src={Logo} />
          </div>
          <div className="main-detal">
            <div className="fields">
              <span className="label-name">Name</span>
              <span className="label-value">
                {data.user.user.firstName} {data.user.user.lastName}
              </span>
            </div>
            <div className="fields">
              <span className="label-name">Category</span>
              <span className="label-value">{data.user.user.membership}</span>
            </div>
            <div className="fields">
              <span className="label-name">State</span>
              <span className="label-value">
                {data.userDetail.personalDetails?.state}
              </span>
            </div>
            <div className="fields">
              <span className="label-name">Phone Number</span>
              <span className="label-value">
                {data.userDetail.personalDetails?.phone}
              </span>
            </div>
            <div className="fields">
              <span className="label-name">Mail</span>
              <span className="label-value">{data.user.user.email}</span>
            </div>
          </div>
          <img
            id="passport"
            src={
              data.user.user.passport == "none"
                ? "sample.png"
                : data.user.user.passport
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FinalStaus;

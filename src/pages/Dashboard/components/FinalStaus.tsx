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

          <div className="pl-[20px] h-[100%] flex flex-col justify-between py-6">
            <ContainerRow title="Name" desc={`${data.user.user.firstName} ${data.user.user.lastName}`}/>
            <ContainerRow title="Category" desc={data?.user?.user?.membership ?? ''}/>
            <ContainerRow title="State" desc={data.userDetail.personalDetails?.state ?? ''}/>
            <ContainerRow title="Phone Number" desc={data.userDetail.personalDetails?.phone ?? ''}/>
            <ContainerRow title="Email" desc={data.user.user.email ?? ''}/>


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




const ContainerRow = ({title, desc}: {title:string, desc:string}) => {
  return (
    <div className="flex flex-row text-[13px] gap-6">
      <p>{title}:</p>
      <p>{desc}</p>
    </div>
  )
}

export default FinalStaus
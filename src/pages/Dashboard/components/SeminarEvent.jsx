import { EventsIcon, LocatinIcon } from "../../../assets/Svg/Index";
import Remita from "../../../assets/Images/remita.png";
import { Header, RegularText } from "../../../components/Common";
import convertDate from "../../../helpers/convertDate";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import query from "../../../helpers/query";
import { setUser } from "../../../redux/user/userSlice";
import {
  setEducatioanlQualification,
  setPersonalDetails,
  setSupportingDocs,
} from "../../../redux/user/userDetailSlice";
import Loading from "../../../components/Loading";
import Alert from "../../../components/Alert";
export default function SeminarEvent({ event }) {
  const data = useSelector((data) => data);
  const [loading, setLoading] = useState(false);
  const [alertText, setAlert] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const config = {
    reference: new Date().getTime().toString(),
    email: "mubarakibrahim2015@gmail.com",
    amount: 2000 * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_acd82313c5945d37a69e9e06195f153984cc70e0",
  };
  const login = async (values) => {
    setLoading(true);
    const response = await query({
      method: "POST",
      url: "/users/login",
      bodyData: values,
    });
    setLoading(false);
    setAlert("Payment Success");
    console.log(response);
    setTimeout(() => {
      setAlert("");
    }, 3000);
    if (response.success) {
      const transactions = [];
      const mytransactions = transactions.concat(
        response.data.data.transactionHistory.certificates,
        response.data.data.transactionHistory.events
      );
      dispatch(
        setUser({
          user: {
            isLoggedIn: true,
            firstName: response.data.data.data.personalDetails.firstName,
            email: response.data.data.data.personalDetails.email,
            lastName: response.data.data.data.personalDetails.lastName,
            token: response.data.data.token,
            isNew:
              response.data.data.data.supportingDoc.length > 0 ? false : true,
            membership: response.data.data.data.membershipCat,
            status: response.data.data.data.status,
            passport: response.data.data.data.personalDetails.passport
              ? response.data.data.data.personalDetails.passport.secureUrl
              : "",
            paid: true,
            cert: response.data.data.certificate,
            rawPassword: values.password,
            transactions: mytransactions,
            membershipNumber:
                response.data.data.data.status == "Approved"
                  ? response.data.data.data.membershipNumber
                  : "",
          },
        })
      );
      dispatch(
        setPersonalDetails({
          personalDetails: response.data.data.data.personalDetails,
        })
      );
      dispatch(
        setSupportingDocs({
          supportingDocs: response.data.data.data.supportingDoc,
        })
      );
      dispatch(
        setEducatioanlQualification({
          educationalQualification:
            response.data.data.data.educationalQualification,
        })
      );
      navigate("/dashboard");
    }
  };
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    const bodyData = {
      cost: 2000 * 100,
      eventId: event._id,
      transactionId: reference.reference,
    };
    console.log(bodyData);
    query({
      method: "POST",
      url: "/event-payments",
      bodyData: bodyData,
      token: data.user.user.token,
    }).then((res) => {
      if (res.success) {
        login({
          email: data.user.user.email,
          password: data.user.user.rawPassword,
        });
      }
    });
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log(data);
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <div className="event_container">
      <Loading loading={loading} />
      <Alert text={alertText} />
      <div className="event_detail">
        <div className="event_time">
          <div className="event_location">
            <span>
              <LocatinIcon /> {event.venue}
            </span>
            <span>
              <EventsIcon />
              {event.time}
            </span>
          </div>
        </div>

        <div className="event_calender">
          <div className="event_cal_date">
            <Header text={convertDate(event.createdAt).split("-")[2]} />
            <RegularText text={convertDate(event.createdAt).split("-")[1]} />
          </div>
          <u
            style={{
              gridColumn: "2/4",
            }}
          >
            <Header text={event.title} />
          </u>
        </div>
      </div>
      <div className="event_payment">
        <Header
          style={{ marginLeft: "auto", marginTop: 20, marginRight: 20 }}
          text={`₦${event.cost}`}
        />
        <div className="payments_flow">
          <div
            onClick={() => {
              initializePayment(onSuccess,onClose);
            }}
            className="payment_button"
          >
            <Header text="Pay Now" />
          </div>
          <img src={Remita} />
        </div>
      </div>
    </div>
  );
}

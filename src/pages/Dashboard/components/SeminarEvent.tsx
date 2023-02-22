import { EventsIcon, LocatinIcon } from "../../../assets/Svg/Index";
import Remita from "../../../assets/Images/remita.png";
import { Header, RegularText } from "../../../components/Common";
export default function SeminarEvent() {
  return (
    <div className="event_container">
      <div className="event_detail">
        <div className="event_time">
          <div className="event_location">
            <span>
              <LocatinIcon /> Modibbo Adama University
            </span>
            <span>
              <EventsIcon />
              08:30am
            </span>
          </div>
        </div>

        <div className="event_calender">
          <div className="event_cal_date">
            <Header text="23" />
            <RegularText text="January" />
          </div>
          <u
            style={{
              gridColumn: "2/4",
            }}
          >
            <Header text="ORIDSAN-ASCEND STUDIOS FOUNDATION, CREATIVE TECHNOLOGY PROGRAM (CTP) 2022" />
          </u>
        </div>
      </div>
      <div className="event_payment">
        <Header
          style={{ marginLeft: "auto", marginTop: 20, marginRight: 20 }}
          text="₦42,000"
        />
        <a style={{ marginLeft: "auto", marginRight: 20 }} href="">
          more details
        </a>
        <div className="payments_flow">
          <div className="payment_button">
            <Header text="Pay Now" />
          </div>
          <img src={Remita} />
        </div>
      </div>
    </div>
  );
}

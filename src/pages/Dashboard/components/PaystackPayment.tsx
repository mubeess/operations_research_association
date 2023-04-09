import React from "react";
import "./styles/paystack.css";
import Remita from "../../../assets/Images/remita.png";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
export default function PaystackPayment() {
  return (
    <div className="paystack_container">
      <img src={Remita} />
      <Select
        label="Year Of Reg"
        style={{ marginBottom: 20 }}
        onChange={() => {}}
        options={["1", "2", "3", "4", "5"]}
      />
      <Button label="Proceed To Payment" />
    </div>
  );
}

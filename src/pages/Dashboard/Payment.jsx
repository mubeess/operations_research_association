import React, { useEffect } from "react";
import "../styles/payments.css";
import { Header } from "../../components/Common";
import { useSelector } from "react-redux";
import convertDate from "../../helpers/convertDate";
function Payment() {
  const data = useSelector((data) => data.user.user.transactions);

  return (
    <div className="payments-container">
      <Header text="My Payments" />
      <div className="main-payments">
        <div className="payment-search">
          <Header text="Reference No/Transaction No/Email" />
        </div>

        <div className="payments-table">
          <table>
            <thead>
              <th>S/N</th>
              <th>Transaction ID</th>
              <th>Amount (In Naira)</th>
              <th>Date</th>
              <th>Status</th>
            </thead>

            <tbody>
              {data?.map((detail, index) => (
                <tr key={index.toString()}>
                  <td>{index + 1}</td>
                  <td>{detail.transactionId}</td>
                  <td>{detail.cost}</td>
                  <td>{convertDate(detail.createdAt)}</td>
                  <td>Approved</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <input onChange={(e)=>{
        const selectedDate = new Date(e.target.value);
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1; // add 1 since getMonth() returns 0-11
        const day = selectedDate.getDate();
        
        console.log(`Selected date: ${year}-${month}-${day}`);
      
      }} type='date'/> */}
    </div>
  );
}

export default Payment;

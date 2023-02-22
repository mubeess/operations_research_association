import React from "react";
import "../styles/payments.css";
import { Header } from "../../components/Common";
import Input from "../../components/Input";
function Payment() {
  return (
    <div className="payments-container">
      <Header text="My Payments" />
      <div className="main-payments">
        <div className="payment-search">
          <Header text="Reference No/Transaction No/Email" />
          <Input
            label=""
            placeholder="Search by keywords"
            outlined
            type="search"
          />
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
              <tr>
                <td>1</td>
                <td>000922jj</td>
                <td>N3000</td>
                <td>20/01/2023</td>
                <td>Approved</td>
              </tr>

              <tr>
                <td>2</td>
                <td>000922jj</td>
                <td>N3000</td>
                <td>20/01/2023</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>3</td>
                <td>000922jj</td>
                <td>N3000</td>
                <td>20/01/2023</td>
                <td>Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Payment;

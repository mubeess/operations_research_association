import React, { useState } from "react";
import "./styles/paystack.css";
import Remita from "../../../assets/Images/remita.png";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import { usePaystackPayment } from 'react-paystack';
import { useDispatch, useSelector } from "react-redux";
import query from "../../../helpers/query";
import Loading from "../../../components/Loading";
import Alert from "../../../components/Alert";
import { setUser } from "../../../redux/user/userSlice";
import { setEducatioanlQualification, setPersonalDetails, setSupportingDocs } from "../../../redux/user/userDetailSlice";
import { useNavigate } from "react-router-dom";
export default function PaystackPayment() {
  const data=useSelector(data=>data)
  const [loading, setLoading] = useState(false);
  const [alertText, setAlert] = useState("");
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "mubarakibrahim2015@gmail.com",
    amount:amount*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_acd82313c5945d37a69e9e06195f153984cc70e0',
};

// you can call this function anything
const login=async (values) => {
  setLoading(true);
  const response = await query({
    method: "POST",
    url: "/users/login",
    bodyData: values,
  });
  setLoading(false);
  setAlert('Payment Success');
  console.log(response);
  setTimeout(() => {
    setAlert("");
  }, 3000);
  if (response.success) {
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
          paid:true,
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
}

const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference)
  const bodyData={
    cost: amount*100,
    duration:year,
    transactionId: reference.reference
  }
  console.log(bodyData)
query({
    method: "POST",
    url: "/certificates",
    bodyData: bodyData,
    token:data.user.user.token
  })
  .then(res=>{
    if (res.success) {
      login({email:data.user.user.email,password:data.user.user.rawPassword})
    }
  })
  
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log(data)
}
const initializePayment = usePaystackPayment(config);
  return (
    <div className="paystack_container">
      <Loading loading={loading} />
      <Alert text={alertText} />
      <img src={Remita} />
      <Select
        label="Duration In Year"
        style={{ marginBottom: 20 }}
        onChange={(val) => {
          setAmount(val.target.value*1000)
          setYear(val.target.value*1)
          console.log(val.target.value*1)
        }}
        options={["1", "2", "3", "4", "5"]}
      />
      <Button onClick={()=>{
        initializePayment(onSuccess, onClose)
      }} label="Proceed To Payment" />
    </div>
  );
}

import React, { useEffect } from 'react'
import Certificate from './Dashboard/components/Certificate'
import Button from '../components/Button';
import ReactToPrint from 'react-to-print';
import { useParams } from "react-router-dom";
import query from "../helpers/query";



function VerifyCert() {
  const params = useParams()
  console.log(params.token)

  const certificateRef = React.useRef();


  // async function verifyUser() {
  //   const response = await query({
  //     method: "POST",
  //     url: `/users/email-verification/${params.token}`,
  //     bodyData: {},
  //   });
  //   setLoading(false);
  //   if (response?.success) {
  //     setSuccess(true);
  //     setAlert(response.data.message);
  //   } else {
  //     setSuccess(false);
  //     setAlert("Something went wrong!");
  //   }
  // }
  // useEffect(() => {
  //   verifyUser();
  // }, []);

  return (
    <div>

      <ReactToPrint
        trigger={
          () =>   
          <Button style={{
          marginTop:20,
          width:70,
          marginLeft:20
        }} label='Print Cert'/>}

        content={() => certificateRef.current}
      />
      {/* {data.paid&& <Certificate data={data} ref={certificateRef} />} */}
      
    </div>
   
  )
}

export default VerifyCert
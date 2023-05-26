import React, { useEffect, useState } from 'react'
import Certificate from './Dashboard/components/Certificate'
import Button from '../components/Button';
import ReactToPrint from 'react-to-print';
import { useParams } from "react-router-dom";
import query from "../helpers/query";



function VerifyCert() {
  const params = useParams()
  console.log(params.token)

  const certificateRef = React.useRef();
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  function verifyUser() {
    setIsLoading(true)
    query({
      method: "GET",
      url: `/users/${params.token}`,
      bodyData: {},
    }).then(val => {
      console.log({
        ...val.data.data.user,
        cert: val.data.data.certificate
      })

      setIsLoading(false)
      setData({
        ...val.data.data.user,
        cert: val.data.data.certificate,
        firstName: val.data.data.user.personalDetails.firstName,
        lastName: val.data.data.user.personalDetails.lastName,
        membership: val.data.data.user.membershipCat,
        paid: val.data.data.user.certificateStatus
      })
    }).catch(err => {
      console.log(err)
    })
    // console.log(response.data.data)

  }
  useEffect(() => {
    verifyUser();
  }, []);

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
      {(!isLoading) && <Certificate data={data} ref={certificateRef} />}

      {isLoading && <div className='py-10 px-6 shadow-lg rounded-sm'>
        LOADING...
      </div> }
      
    </div>
   
  )
}

export default VerifyCert
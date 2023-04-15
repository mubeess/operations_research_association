import React, { useEffect } from 'react'
import Certificate from './components/Certificate'
import { useSelector } from 'react-redux'
import PaystackPayment from './components/PaystackPayment'
import Button from '../../components/Button'

function CertificatePage() {
  const data=useSelector((user)=>user.user.user)
  return (
    <>
    {data.paid&& <Button style={{
      marginTop:20,
      width:70,
      marginLeft:20
    }} label='Print Cert'/>}
    {data.paid&& <Certificate data={data}/>}
    {!data.paid&&<PaystackPayment/>}
    </>
   
  )
}

export default CertificatePage
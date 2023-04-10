import React, { useEffect } from 'react'
import Certificate from './components/Certificate'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import PaystackPayment from './components/PaystackPayment'
import Button from '../../components/Button'

function CertificatePage() {
  const data=useSelector((user:RootState)=>user.user.user)
  useEffect(()=>{
   console.log(data,"-----")
  },[])
  return (
    <>
    {data.paid&& <Button style={{
      marginTop:20,
      width:70,
      marginLeft:20
    }} label='Print Cert'/>}
    {data.paid&& <Certificate/>}
    {!data.paid&&<PaystackPayment/>}
    </>
   
  )
}

export default CertificatePage
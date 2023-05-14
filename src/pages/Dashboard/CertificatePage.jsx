import React, { useEffect } from 'react'
import Certificate from './components/Certificate'
import { useSelector } from 'react-redux'
import PaystackPayment from './components/PaystackPayment'
import Button from '../../components/Button'
import ReactToPrint from 'react-to-print';

function CertificatePage() {
  
  const data = useSelector((user)=>user.user.user)
  const certificateRef = React.useRef();

  return (
    <div>

      {(data.status !== undefined && data.status !== 'Pending') ? <>
        {data.paid && (
          <>
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
            {data.paid&& <Certificate data={data} ref={certificateRef} />}
          </>
        )}

      {/* {data.paid&& <Certificate data={data}/>} */}
      {!data.paid&&<PaystackPayment/>}

    
      </> : 
      <div className='py-[50px] h-[40vh] px-3 w-[70%] sm:w-[100%] sm:text-center  bg-[white] rounded-sm shadow-sm'>
        You can proceed to pay for your certificate, if your document is Approved
      </div>}
    </div>
   
  )
}

export default CertificatePage
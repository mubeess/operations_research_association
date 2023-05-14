import React from 'react'
import {MdOutlineCancel} from 'react-icons/md'

interface errorType {
    message?: string,
    callback: ()=>{}
}

const Error = ({message, callback}: errorType) => {
  return (
    <div className='py-3 px-2 shadow-md rounded-md flex justify-between bg-main-bg w-[300px]'>
        <p className='text-[12px] text-error'>{message}</p>
        <MdOutlineCancel className='cursor-pointer text-[24px] text-error' onClick={callback}/>
    </div>
  )
}

export default Error
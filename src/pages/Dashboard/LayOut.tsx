import React from 'react'
import '../styles/layout.css'
import Logo from '../../assets/Images/or_logo.png'
import User from '../../assets/Svg/user.svg'
import { Outlet } from 'react-router-dom'

function LayOut() {
  return (
    <div className='layout_container'>
      <div className='layout_nav'>
        <img className='layout_logo' src={Logo} alt='img'/>
        <img className='layout_user' src={User} alt='img'/>
      </div>
      <div className='layout_body'>
        <div className='layout_aside'></div>
        <div className='layout_main'>
          <Outlet/>
        </div>
      </div>
    
    </div>
  )
}

export default LayOut
import React from 'react'
import '../styles/seminar.css'
import SeminarEvent from './components/SeminarEvent'
function Seminars() {
  return (
    <div className='seminars_container'>
    <SeminarEvent/>
    <SeminarEvent/>
    </div>
  )
}

export default Seminars
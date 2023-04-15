import React, { useEffect, useState } from 'react'
import '../styles/seminar.css'
import SeminarEvent from './components/SeminarEvent'
import useFetch from '../../hooks/useFetch'
import query from '../../helpers/query'
function Seminars() {
  const [events,setEvents]=useState([])
  // const data=useFetch('https://oridsan.fly.dev/api/v1/events')
  useEffect(()=>{
  query({method:'GET',url:'/events',bodyData:{}})
  .then(data=>{
    setEvents(data.data.data)
  })
    // setEvents(data.result.data)
  // console.log(data.result,'daaaa')
 
  },[])
  return (
    <div className='seminars_container'>
    {
      events.map((event,index)=>(
        <SeminarEvent event={event} key={index.toString()}/> 
      ))
    }
    </div>
  )
}

export default Seminars
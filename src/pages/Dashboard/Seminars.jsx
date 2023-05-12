import React, { useEffect, useState, Suspense } from 'react'
import '../styles/seminar.css'
import SeminarEvent from './components/SeminarEvent'
import useFetch from '../../hooks/useFetch'
import query from '../../helpers/query'

function Seminars() {
  const [events,setEvents]=useState([])
  // const data=useFetch('https://oridsan.fly.dev/api/v1/events')
  useEffect(()=>{
      query({method:'GET',url:'/events',bodyData:{}})
        .then(data => {
          setEvents(data.data.data);
        });
 
  },[])
  return (
    <div className='seminars_container'>
      {
        events.map((event,index)=>(
      <Suspense fallback={<div className='mt-10'>
        {console.log('loading ............')}
        <p>Loading .....</p>
        </div>}>
          <SeminarEvent event={event} key={index.toString()}/> 
        </Suspense>
          ))
        }
      </div>
  )
}

export default Seminars
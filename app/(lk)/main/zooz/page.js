'use client'
import React, { useRef, useState } from 'react'
import Body from './Body'
import { useRouter } from 'next/navigation'
const Roomba = () => {
  let [pipa,setpipa]=useState()
  let snow=(kil)=>{
    setpipa(kil)
  }
  let hold=useRef()
  const router = useRouter()


  
  return (
    <div>
      <Body/>
    <h3>Fillera+</h3>

      <input type='text' ref={hold}></input>
      <button onClick={()=>snow(hold.current.value)}>OK</button>
    {pipa}
    <button type="button" onClick={() => router.push('/')}>DDD</button>
      
      </div>
  )
}

export default Roomba
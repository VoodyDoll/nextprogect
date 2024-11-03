'use client'
import React, { useRef, useState } from 'react'
import Body from './Body'
const Roomba = () => {
  let [pipa,setpipa]=useState()
  let snow=(kil)=>{
    setpipa(kil)
  }
  let hold=useRef()



  
  return (
    <div>
      <Body/>
    <h3>Fillera+</h3>

      <input type='text' ref={hold}></input>
      <button onClick={()=>snow(hold.current.value)}>OK</button>
    {pipa}
      
      
      </div>
  )
}

export default Roomba
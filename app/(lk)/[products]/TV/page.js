'use client'
import React, { useReducer } from 'react'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
// import { useRouter } from 'next/router'
const TV = () => {
    let figaro=usePathname()
  //  let fifa=useParams()
  return (  
   
    <div>
      {/* <button onClick={handleClick}>ds</button> */}
      
      <center><h3 style={{color:'red'}}>TV</h3></center>
      <center><Image src='/img/Loot.jpg' alt='' width={200} height={200}></Image></center>
      {figaro}
    
     
      </div>
  )
}

export default TV
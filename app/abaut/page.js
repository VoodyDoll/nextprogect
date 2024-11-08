'use client'
import React, { useState } from 'react'

const page = () => {
  let [finger,setfinger]=useState(0)
  return (

    <div>
      page
      <button onClick={()=>setfinger(finger+1)}>fh</button>
      {finger}
      
      </div>
  )
}

export default page
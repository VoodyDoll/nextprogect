import React from 'react'

let pipa=async ()=>{
  let res=await fetch(`http://localhost:5000/1`)
  return res.json()
}

export default [id]
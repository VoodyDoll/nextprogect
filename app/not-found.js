'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const notFound = () => {
 
let router=useRouter()
  useEffect(()=>{
    console.log('test')
    setTimeout(() => {
      router.push('/')
    }, 2000);
  },[])

  return (
    <div style={{fontSize:'2rem',marginTop:'25px',color:'red'}}>
      <center>This adress not valid
      <p>Перехожу на главную страницу через 2 сек</p>
      </center>
    </div>
  )
}

export default notFound
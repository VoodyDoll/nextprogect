// import React from 'react'
// 'use client'
import Link from "next/link"

const Alllayout = ({ children }) => {

  return (
    <div>

      <center><ul>
        <li><Link href="/products/TV">TV</Link></li>
        <li><Link href="/products/WoshMashin">WoshMashin</Link></li>
      </ul>
      </center>


      {children}

    </div>
  )
}

export default Alllayout
// import React from 'react'
// 'use client'
import Link from "next/link"
import styles from '../styles/main.module.css'

const Alllayout = ({ children }) => {

  return (
    <div>

      <center className={styles.pad}><ul>
        <li><Link href="/products/TV">TV</Link></li>
        <li><Link href="/products/WoshMashin">WoshMashin</Link></li>
      </ul>
      </center>


      {children}

    </div>
  )
}

export default Alllayout
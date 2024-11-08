'use client'
import React from 'react'

const page = () => {

  async function Page() {
    let data = await fetch(`http://localhost:3000/api/data`, {
      cache: 'no-store',
      method: 'POST',
      body: '{"name":"fima","age":"55"}'

    })
    let posts = await data.json()

  }
  let posts = [{ name: 'pipa', age: 45 }, { name: 'fonda', age: 54 }]
  return (
    <div>

      <button onClick={Page}>get</button>

      <ul style={{ color: 'red', marginTop: '15px' }}>
        {posts?.map((post) => (
          <center ><li style={{ padding: '2px' }} key={post.age}>{post.name}</li></center>
        ))}
      </ul>

    </div>
  )
}

export default page
import React from 'react'

export let getStaticPath = async () => {
  let resp = await fetch(`http://localhost:5000/1`)
  let data = await resp.json()

  let path = data.map((item) => {
    return {
      params: { id: item.id }
    }
  })
  return {
    path,
    fallback: false
  }
}

export let getStaticProps=async (context)=>{
  let id=context.params.id

  let resp = await fetch(`http://localhost:5000/${id}`)
  let data = await resp.json()
  return {
    props:{product:data}
  }
}

const Details = ({product}) => {
console.log(product)
  return (
    <div>Details</div>
  )
}

export default Details
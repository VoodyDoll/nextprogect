import React from 'react'



export let getStaticPath = async () => {
  let resp = await fetch(`http://localhost:5000/1`)
  let data = await resp.json()

  let paths = data.map((item) => {
    return {
      params: { id: item.id }
    }    
  })
  return {
    paths,
    fallback: false
  }  
}

// export let getStaticProps=async ( context )=>{
//   let id=context.params.id

//   let resp = await fetch(`http://localhost:5000/statics/${id}`)
//   let data = await resp.json()
//   console.log(data)
//   return {
//     props:{products:data}
//   }
// }

const Details = () => {

  return (    
    
    <div>Details</div>
  )
}



export default Details
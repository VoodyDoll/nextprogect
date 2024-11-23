import React from 'react'
import Image from 'next/image'

export async function getStaticPaths() {
  
  const res = await fetch(`http://localhost:5000/2`)
  const posts = await res.json() 
  
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))
  
  return { paths, fallback: false }
}
  
// хорошо
export let getStaticProps = async ({params}) => {
  let id = params.id

  let resp = await fetch(`http://localhost:5000/rump/${id}`)
  let data = await resp.json()
  console.log(data)
  return {
    props: { products: data}
  }

}
const Details = ( {products} ) => {

  return (

    <div>Details:
      {products.map((item) => {
        return (
          <center>

            <div>
              <Image src={`/img/${item.img}`} width={350} height={250} alt='not foto' objectFit='cover' ></Image>
            </div>
            <p key={item.id} style={{ color: 'red' }}>{item.title} : {item.prise} руб</p>
            <button>Add bag</button>
          </center>
        )
      })}

    </div>
  )
}

export default Details
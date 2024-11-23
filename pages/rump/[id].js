import React from 'react'
import Image from 'next/image'

const Post = ({ post }) => (
  <div>
    <h1>{post}</h1>
  </div>
)

export default Post

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false,
  };
}

export function getStaticProps({params}){
  let id = params.id
  return {
        props: { post: id}
      }
}

// export let getStaticPath = async () => {
//   let resp = await fetch(`http://localhost:5000/2`)
//   let data = await resp.json()

//   let paths = data.map((item) => {
//     return {
//       params: { id: item.id},
//     }
//   })
//   return {
//     paths,
//     fallback: false
//   }
// // }
// export async function getStaticProps(params) {
  

// // export let getStaticProps = async ({params}) => {
// //   let id = context.params.id

//   let resp = await fetch(`http://localhost:5000/rump/${params.id}`)
//   let data = await resp.json()
//   console.log(data)
//   return {
//     props: { products: {data}}
//   }
// // }
// }
// const Details = ({ products }) => {

//   return (

//     <div>Details:
//       {products.map((item) => {
//         return (
//           <center>

//             <div>
//               <Image src={`/img/${item.img}`} width={350} height={250} alt='not foto' objectFit='cover' ></Image>
//             </div>
//             <p key={item.id} style={{ color: 'red' }}>{item.title} : {item.prise} руб</p>
//             <button>Add bag</button>
//           </center>
//         )
//       })}


//     </div>
//   )
// }

// export default Details
import Lipstic from '../../../components/lipstic/Lipstic'
import styles from '../../../styles/main.module.css'
export default async function Page() {
    let data = await fetch(`http://localhost:3000/api/data`, { cache: 'no-store',
        method:'POST',
        body:'{"name":"flint","age":"55"}'       
    
     })
    let posts = await data.json()
    return (
      <>
      <center><Lipstic sort={555}/></center>

      <ul style={{color:'red',marginTop:'15px'}}>
        {posts.map((post) => (
          <center ><li   key={post.age}>{post.name}</li></center>
        ))}
      </ul>
      </>
    )
}
//   let data = await fetch('https://api.vercel.app/blog')
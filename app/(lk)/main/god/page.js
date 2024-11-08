
export default async function Page() {
    let data = await fetch(`http://localhost:3000/api/data`, { cache: 'no-store',
        method:'POST',
        body:'{"name":"flint","age":"55"}'       
    
     })
    let posts = await data.json()
    return (
      <ul style={{color:'red',marginTop:'15px'}}>
        {posts.map((post) => (
          <center ><li style={{padding:'2px'}}  key={post.age}>{post.name}</li></center>
        ))}
      </ul>
    )
  }
//   let data = await fetch('https://api.vercel.app/blog')
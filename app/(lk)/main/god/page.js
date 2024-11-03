
export default async function Page() {
    let data = await fetch(`http://localhost:3000/api/data`)
    let posts = await data.json()
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.age}>{post.name}</li>
        ))}
      </ul>
    )
  }
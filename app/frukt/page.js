export default async function Page() {
    const res = await fetch(`http://localhost:5000/1`, { next: { tags: ['collection'] } })
    const data = await res.json()
    return <main>
    
    <center>

    {data.map((item) => {
        return (
            <p>{item.id}</p>
        )
    })}
</center>
</main>
  }
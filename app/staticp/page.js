export async function generateStaticParams() {
  const posts = await fetch(`http://localhost:5000/1`).then((res) => res.json())
 
  return posts.map((post) => ({
    id: post.id,
  }))
}
 
// Несколько версий этой страницы будут сгенерированы статически
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
  const { id } = params
  return(
    <p>{id}</p>
  )
}
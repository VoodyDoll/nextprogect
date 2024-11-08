
import React from 'react';
export async function getServerSideProps() {
  const response = await fetch(`http://localhost:5000/sushy`);
  const posts = await response.json();
  console.log(posts)
  return {
    props: {  },
  };
}
const Blog = ({ posts }) => (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          
          <p>{post.name}</p>
        </article>
      ))}
    </div>
  );
  
  
  export default Blog;
import React from 'react'

/**
 */
const baseUrl = 'https://jsonplaceholder.typicode.com'

/**
 */
const Blog = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

/**
 */
export const getStaticProps = async () => {
  const res = await fetch(`${baseUrl}/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

/**
 */
export default Blog

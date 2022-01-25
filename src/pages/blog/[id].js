import React from 'react'

/**
 */
const baseUrl = 'https://jsonplaceholder.typicode.com'

/**
 */
const Blog = ({ post }) => {
  return (
    <ul>
      <li>{post.title}</li>
    </ul>
  )
}

/**
 */
export const getStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/posts`)
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }))

  return { paths, fallback: false }
}

/**
 */
export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${baseUrl}/posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}

/**
 */
export default Blog

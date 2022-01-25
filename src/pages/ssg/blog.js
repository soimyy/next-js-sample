import React, { useState } from 'react'

/**
 */
const baseUrl = 'https://jsonplaceholder.typicode.com'

/**
 */
const Blog = ({ posts }) => {
  const [keyword, setKeyWord] = useState(null)
  const handler = (e) => {
    setKeyWord(e.target.value)
  }

  const filtered = keyword
    ? posts.filter((post) => post.title.indexOf(`${keyword}`) != -1)
    : posts

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          handler(e)
        }}
      />
      <ul>
        {filtered.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
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

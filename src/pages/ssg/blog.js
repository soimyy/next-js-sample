import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

/**
 */
const baseUrl = 'https://jsonplaceholder.typicode.com'

/**
 */
const Blog = ({ posts }) => {
  const [keyword, setKeyWord] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const handler = (e) => {
    setKeyWord(e.target.value)
  }

  useEffect(() => {
    setFilteredPosts(filterPosts(keyword))
  }, [keyword])

  const filterPosts = (keyword) =>
    keyword
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
        {filteredPosts.map((post) => (
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

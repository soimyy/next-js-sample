import React, { useEffect, useState } from 'react'

/**
 */
const baseUrl = 'https://jsonplaceholder.typicode.com'

/**
 */
const Blog = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${baseUrl}/posts/1`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}

export default Blog

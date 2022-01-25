import useSWR from 'swr'

/**
 */
const baseUrl = 'https://jsonplaceholder.typicode.com'

/**
 */
const fetcher = (...args) => fetch(...args).then((res) => res.json())

/**
 */
const Blog = () => {
  const { data, error } = useSWR(`${baseUrl}/posts/1`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}

export default Blog

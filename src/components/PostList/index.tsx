import { useEffect } from 'react'
import axios from 'axios'

const PostList = () => {
  useEffect(() => {
    const getData = await axios.get('https://dev.codeleap.co.uk/careers/')
  }, [])

  return <div />
}

export default PostList

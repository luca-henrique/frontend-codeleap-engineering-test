import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { readPostRequest } from 'src/store/modules/exemple/actions'

import PostItem from 'src/components/PostItem'

const PostList = () => {
  const dispatch = useDispatch()

  const { data, loading } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(readPostRequest())
  }, [])

  if (loading) {
    return <div>Loading</div>
  }
  return (
    <div style={{ padding: '0 34px' }}>
      {data.map(item => {
        return <PostItem item={item} />
      })}
    </div>
  )
}

export default PostList

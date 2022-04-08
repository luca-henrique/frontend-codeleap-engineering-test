import Header from 'src/components/Header'
import FormCreateNewPost from 'src/components/FormCreatePost'
import PostList from 'src/components/PostList'

export const Main = () => {
  return (
    <div>
      <Header title="CodeLeap Network" colorTitle="primaryDefaultWhite" />

      <FormCreateNewPost />

      <PostList />
    </div>
  )
}

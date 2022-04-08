import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { createPostRequest } from 'src/store/modules/exemple/actions'
import useLocalStorage from 'src/hook/useLocalStorageHook'

import InputText from 'src/components/InputText'
import Button from 'src/components/atoms/Button'
import { Title } from 'src/components/Typography'

const FormCreateNewPost = () => {
  const dispatch = useDispatch()

  const [name] = useLocalStorage<string>('username', 'Bob')

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(
      createPostRequest({
        username: name,
        title,
        content,
      }),
    )
  }

  return (
    <section
      style={{
        marginTop: '30px',
        padding: '0px 38px',
      }}
    >
      <form
        style={{ border: '1px solid #999999', padding: '24px 34px' }}
        onSubmit={handleSubmit}
      >
        <Title>What’s on your mind?</Title>
        <InputText
          label="Title"
          type="text"
          placeholder="hello world"
          onChange={setTitle}
        />
        <InputText
          label="Contet"
          type="textarea"
          placeholder="Content here"
          onChange={setContent}
        />
        <Button type="submit" disabled={!title || !content}>
          create
        </Button>
      </form>
    </section>
  )
}

export default FormCreateNewPost

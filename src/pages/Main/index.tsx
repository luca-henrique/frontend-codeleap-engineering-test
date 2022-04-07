import { useEffect, useState } from 'react'
import InputText from 'src/components/InputText'
import { Icons } from 'src/assets'

import { Title } from 'src/components/Typography'
import Button from 'src/components/atoms/Button'
import {
  createPostRequest,
  readPostRequest,
} from 'src/store/modules/exemple/actions'
import { useDispatch } from 'react-redux'
import useLocalStorage from 'src/hook/useLocalStorageHook'
import styled from 'styled-components'

export const Main = () => {
  return (
    <div>
      <Header title="CodeLeap Network" colorTitle="primaryDefaultWhite" />

      <FormCreateNewPost />

      <ListPost />
    </div>
  )
}

export const Label = styled.h6`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #777777;
`

export const LabelTime = styled.h6`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #777777;
`

export const Description = styled.h6`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`

const PostItem = ({ item }) => {
  const [name] = useLocalStorage<string>('username', 'Bob')

  return (
    <div
      style={{
        marginTop: '34px',
        border: '1px solid #999999',
      }}
    >
      <Header
        title="My First Post at CodeLeap Network!"
        colorTitle="primaryDefaultWhite"
        icons={name === item?.username}
      />

      <div style={{ padding: '23px 30px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Label>@Victor</Label>
          <LabelTime>25 minutes ago</LabelTime>
        </div>
        <div style={{ marginTop: '18px' }}>
          <Description>
            Curabitur suscipit suscipit tellus. Phasellus consectetuer
            vestibulum elit. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Maecenas egestas arcu
            quis ligula mattis placerat. Duis vel nibh at velit scelerisque
            suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor
            sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna
            dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus
            lacinia erat.
          </Description>
        </div>
      </div>
    </div>
  )
}

interface HeaderProps {
  title: string
  colorTitle: string
  icons?: boolean
}

const Header = ({ title, colorTitle, icons }: HeaderProps) => {
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '80px',
        alignItems: 'center',
        background: '#000',
        padding: '0px 38px',
      }}
    >
      <Title color={colorTitle}>{title}</Title>

      {icons && (
        <div>
          <img
            src={Icons.delete}
            alt="delete post"
            style={{ marginRight: '38px' }}
          />
          <img src={Icons.edit} alt="edit post" />
        </div>
      )}
    </header>
  )
}

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

const ListPost = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readPostRequest())
  }, [])

  return (
    <div style={{ padding: '0 34px' }}>
      <PostItem />
    </div>
  )
}

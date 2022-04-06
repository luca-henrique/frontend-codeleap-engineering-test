import React, { useState } from 'react'

import TextInput from 'src/components/InputText'
import Button from 'src/components/atoms/Button'

import { Title } from 'src/components/Typography'
import useLocalStorage from 'src/hook/useLocalStorageHook'
import { useHistory } from 'react-router'
import { Container, Form } from './style'

export const SignUp = () => {
  const [username, setUsername] = useState('')

  const [, setName] = useLocalStorage<string>('username', 'Bob')

  const history = useHistory()

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName(username)

    history.push('/main')
  }

  return (
    <Container>
      <Form onSubmit={submitForm}>
        <Title>Welcome to CodeLeap network!</Title>

        <div style={{ height: '30px' }} />

        <TextInput
          label="Please enter your username"
          placeholder="Jonh doe"
          value={username}
          onChange={setUsername}
          required
        />

        <div style={{ height: '20px' }} />

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit" disabled={!username}>
            Enter
          </Button>
        </div>
      </Form>
    </Container>
  )
}

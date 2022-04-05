import { ChangeEvent } from 'react'

import { Label } from '../Typography'

import { Container, Input } from './style'

interface PropsInputText {
  label?: string
  value: string
  onChange: () => void
  type: string
}

const InputText = ({
  label,
  value,
  onChange,
  type,
  ...rest
}: PropsInputText) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    onChange(event.target.value)
  }

  return (
    <Container>
      <Label>{label}</Label>

      <Input value={value} type={type} onChange={handleChange} />
    </Container>
  )
}

export default InputText

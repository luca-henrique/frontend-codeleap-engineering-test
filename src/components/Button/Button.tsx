import { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
  children: ReactNode
  background?: string
  color?: string
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>
}

import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Container } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  background?: string
  color?: string
  disabled?: boolean
}

const Button = ({
  children,
  disabled,
  background,
  color,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      color={disabled ? 'primaryDefaultBlack' : color}
      background={disabled ? 'primaryDefaultGrey' : background}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Container>
  )
}

export default Button

import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  return <div>{children}</div>
}

export default Modal

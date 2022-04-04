interface PropsInputText {
  label: string
  placeholder: string
  type: string
}

const InputText = ({ label, type, placeholder }: PropsInputText) => {
  return (
    <div>
      <h6>{label}</h6>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default InputText

import InputText from 'src/components/InputText'

export const SignUp = () => {
  return (
    <div>
      <form>
        <h3>Welcome to CodeLeap network!</h3>
        <InputText
          label="Please enter your username"
          placeholder="Jonh doe"
          type="text"
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}

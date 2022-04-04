import InputText from '../InputText'
import Modal from '../Modal'

const EditItem = () => {
  return (
    <Modal>
      <form>
        <h2>What’s on your mind?</h2>
        <InputText label="Title" type="text" placeholder="hello world" />
        <InputText label="Contet" type="textarea" placeholder="Content here" />
        <button type="submit">create</button>
      </form>
    </Modal>
  )
}

export default EditItem

import Modal from '../Modal'

const DeleteAlert = () => {
  return (
    <Modal>
      <div>
        <h2>Are you sure you want to delete this item?</h2>
        <div>
          <button type="button">Cancel</button>
          <button type="button">Ok</button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteAlert

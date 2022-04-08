import { Icons } from 'src/assets'
import { useDispatch } from 'react-redux'

import {
  openAlertDeletePost,
  openModalUpdatePost,
} from 'src/store/modules/exemple/actions'

import { Title } from 'src/components/Typography'

interface HeaderProps {
  id?: integer
  title: string
  colorTitle: string
  icons?: boolean
}

const Header = ({ id, title, colorTitle, icons }: HeaderProps) => {
  const dispatch = useDispatch()

  const deletePost = () => {
    dispatch(openAlertDeletePost(id))
  }

  const updatePost = () => {
    dispatch(openModalUpdatePost(id))
  }

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
            onClick={deletePost}
          />
          <img src={Icons.edit} alt="edit post" onClick={updatePost} />
        </div>
      )}
    </header>
  )
}

export default Header

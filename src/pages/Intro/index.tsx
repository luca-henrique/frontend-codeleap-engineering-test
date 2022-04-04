import { Icons } from 'src/assets'

import { useSelector } from 'react-redux'

export const Intro = () => {
  const exemple = useSelector(state => state)

  console.log(exemple)
  return (
    <div>
      <img src={Icons.logo} alt="Intro page" />
    </div>
  )
}

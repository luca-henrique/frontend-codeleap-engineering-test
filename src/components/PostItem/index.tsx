import styled from 'styled-components'

import { intervalToDuration } from 'date-fns'

import useLocalStorage from 'src/hook/useLocalStorageHook'
import Header from '../Header'

export const Label = styled.h6`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #777777;
`

export const LabelTime = styled.h6`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #777777;
`

export const Description = styled.h6`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`

const PostItem = ({ item }) => {
  const [name] = useLocalStorage<string>('username', 'Bob')

  const startDateExemple = new Date(item.created_datetime)
  const endDateExemple = new Date()

  const compareTime = (startDate, endDate): any => {
    const diff = intervalToDuration({
      start: startDate,
      end: endDate,
    })

    return diff.minutes
  }

  return (
    <div
      style={{
        marginTop: '34px',
        marginBottom: '34px',
        border: '1px solid #999999',
      }}
    >
      <Header
        title={item.title}
        colorTitle="primaryDefaultWhite"
        icons={name === item?.username}
        id={item.id}
      />

      <div style={{ padding: '23px 30px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Label>@{item.username}</Label>
          <LabelTime>{compareTime(startDateExemple, endDateExemple)}</LabelTime>
        </div>
        <div style={{ marginTop: '18px' }}>
          <Description>{item.content}</Description>
        </div>
      </div>
    </div>
  )
}

export default PostItem

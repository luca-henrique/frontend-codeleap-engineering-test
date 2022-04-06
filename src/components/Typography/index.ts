import styled from 'styled-components'

const COLORS = {
  primaryDefaultBlack: '#000',
  primaryDefaultWhite: '#fff',
  primaryDefaultGrey: '#d8d8d8',
}

interface PropsTypography {
  color?: string
}

export const Title = styled.h1<PropsTypography>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  color: ${({ color }) =>
    color ? `${COLORS[color]}` : COLORS.primaryDefaultBlack};
`

export const Label = styled.h6<PropsTypography>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: ${({ color }) =>
    color ? `${COLORS[color]}` : COLORS.primaryDefaultBlack};
`

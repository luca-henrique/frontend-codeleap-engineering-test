import styled from 'styled-components'

const COLORS = {
  primaryDefaultBlack: '#000',
  primaryDefaultWhite: '#fff',
  primaryDefaultGrey: '#d8d8d8',
}

interface PropsButton {
  background?: string
  color?: string
}

export const Container = styled.button<PropsButton>`
  background-color: ${({ background }) =>
    background ? `${COLORS[background]}` : COLORS.primaryDefaultBlack};

  color: ${({ color }) =>
    color ? `${COLORS[color]}` : COLORS.primaryDefaultWhite};

  border: none;
  padding: 7px 30px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  width: 100%;
`

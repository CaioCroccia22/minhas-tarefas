import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'ativo'
})<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: #fcfcfc;
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.label`
  font-size: 14px;
`

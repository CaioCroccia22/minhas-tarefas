import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variavel from '../../styles/variavel'

export const Circulo = styled(Link)`
  display: block;
  height: 64px;
  width: 64px;
  background-color: ${variavel.verde}
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`

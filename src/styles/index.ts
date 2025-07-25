import styled, { createGlobalStyle } from 'styled-components'
import variavel from './variavel'

const EstiloGlobal = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Roboto Mono", monospace;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EstiloGlobal

export const MainContainer = styled.main`
  padding: 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.p`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #66666;
  border-color: #66666;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  margin-right: 16px;
  border: none;
  cursor: pointer;
  background-color: ${variavel.azulEscuro};
  border-radius: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variavel.verde};
`

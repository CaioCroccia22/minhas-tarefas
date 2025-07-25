import { styled } from 'styled-components'
import variavel from '../../styles/variavel'

import { Prioridade } from '../../utils/enum/Tarefa'
import { Status } from '../../utils/enum/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: Prioridade
  status?: Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'status') {
    if ('status' in props) {
      if (props.status === Status.PENDENTE) return variavel.amarelo
      if (props.status === Status.CONCLUIDA) return variavel.verde
    }
  }
  if (props.parametro === 'prioridade') {
    if ('prioridade' in props) {
      if (props.prioridade === Prioridade.URGENTE) return variavel.vermelho
      if (props.prioridade === Prioridade.IMPORTANTE) return variavel.amarelo2
    }
  }
  return '#ccc'
}

export const Card = styled.div`

  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-itens center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variavel.vermelho};
`

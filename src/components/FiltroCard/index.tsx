import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { Prioridade, Status } from '../../utils/enum/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  ativo?: boolean
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: Prioridade | Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const contaTarefa = () => {
    if (criterio === 'todas') {
      return tarefas.itens.length
    }

    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
  }
  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor //true
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio: criterio,
        valor: valor
      })
    )
  }

  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contaTarefa()}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard

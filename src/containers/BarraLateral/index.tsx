import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'

import * as S from './styles'
import { RootReducer } from '../../store'
import { Prioridade, Status } from '../../utils/enum/Tarefa'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const Navigate = useNavigate()
  const buscar = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => buscar(alteraTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={Status.PENDENTE}
                criterio="status"
                legenda="Pendente"
              />
              <FiltroCard
                valor={Status.CONCLUIDA}
                criterio="status"
                legenda="Concluídas"
              />
              <FiltroCard
                valor={Prioridade.URGENTE}
                criterio="prioridade"
                legenda="Urgentes"
              />
              <FiltroCard
                valor={Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="Importantes"
              />
              <FiltroCard
                valor={Prioridade.NORMAL}
                criterio="prioridade"
                legenda="Normal"
              />
              <FiltroCard criterio="todas" legenda="Todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => Navigate('/')} type="button">
            Voltar a lista de Tarefa
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral

import { useDispatch, UseDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import { alteraTermo } from '../../store/reducers/filtro'
import { Campo } from '../../styles'

import * as S from './styles'
import { RootReducer } from '../../store'
import { Prioridade, Status } from '../../utils/enum/Tarefa'

const BarraLateral = () => {
  const buscar = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
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
      </div>
    </S.Aside>
  )
}

export default BarraLateral

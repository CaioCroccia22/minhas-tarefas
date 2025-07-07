import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Prioridade, Status } from '../../utils/enum/Tarefa'
import { MainContainer, Titulo } from './../../styles/index'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const Tarefas = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefa = () => {
    let TarefasFiltradas = Tarefas.itens ?? []

    if (termo) {
      TarefasFiltradas = TarefasFiltradas.filter(
        (item) => item.titulo.search(termo.toLowerCase()) >= 0
      )
      return TarefasFiltradas
    } else if (criterio === 'prioridade' && valor != Prioridade.NORMAL) {
      TarefasFiltradas = TarefasFiltradas.filter(
        (item) => item.prioridade === valor
      )
      return TarefasFiltradas
    } else if (criterio === 'status' && valor != Prioridade.NORMAL) {
      TarefasFiltradas = TarefasFiltradas.filter(
        (item) => item.status === valor
      )
      return TarefasFiltradas
    } else {
      return Tarefas.itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e ${termo}` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: Todas
        ${complementacao}
      `
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${`${criterio} = ${valor}`}
        ${complementacao}
      `
    }
    return mensagem
  }

  const tarefas = filtraTarefa()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((itemTarefa) => (
          <li key={itemTarefa.titulo}>
            <Tarefa
              id={itemTarefa.id}
              descricao={itemTarefa.descricao}
              titulo={itemTarefa.titulo}
              prioridade={itemTarefa.prioridade}
              status={itemTarefa.status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas

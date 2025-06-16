import Tarefa from '../../components/Tarefa'
import { Prioridade, Status } from '../../utils/enum/Tarefa'
import { Container } from './styles'

const Tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Ver videoaula',
    prioridade: Prioridade.IMPORTANTE,
    status: Status.PENDENTE
  },
  {
    titulo: 'Fazer Lição',
    descricao: 'Fazer Lição de Matemática',
    prioridade: Prioridade.URGENTE,
    status: Status.CONCLUIDA
  },
  {
    titulo: 'Correr na Praia',
    descricao: 'Preciso correr na praia as 19hrs',
    prioridade: Prioridade.NORMAL,
    status: Status.PENDENTE
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <ul>
        {Tarefas.map((itemTarefa) => (
          <li key={itemTarefa.titulo}>
            <Tarefa
              descricao={itemTarefa.descricao}
              titulo={itemTarefa.titulo}
              prioridade={itemTarefa.prioridade}
              status={itemTarefa.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas

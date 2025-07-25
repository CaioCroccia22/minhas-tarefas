import { Prioridade } from '../utils/enum/Tarefa'
import { Status } from '../utils/enum/Tarefa'

class Tarefa {
  titulo: string
  prioridade: Prioridade
  status: Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: Prioridade,
    status: Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa

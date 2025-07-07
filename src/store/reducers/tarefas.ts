import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import { Prioridade, Status } from '../../utils/enum/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar material de apoio',
      prioridade: Prioridade.IMPORTANTE,
      status: Status.CONCLUIDA,
      titulo: 'Estudar React'
    },
    {
      id: 2,
      descricao: 'Correr na Praia',
      prioridade: Prioridade.URGENTE,
      status: Status.PENDENTE,
      titulo: 'Não esquecer de lavar o tênis'
    },
    {
      id: 3,
      descricao: 'Ir para a academia',
      prioridade: Prioridade.NORMAL,
      status: Status.CONCLUIDA,
      titulo: 'Levar a garrafinha'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        itens: state.itens.filter((t) => t.id !== action.payload)
      }
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa !== -1) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar(state, action: PayloadAction<Tarefa>) {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer

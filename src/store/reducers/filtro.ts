import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prioridade, Status } from '../../utils/enum/Tarefa'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: Prioridade | Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer

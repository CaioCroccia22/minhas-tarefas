import { useState } from 'react'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Prioridade, Status } from '../../utils/enum/Tarefa'
import { Form, Opcoes } from './styles'
import { useDispatch } from 'react-redux'

const Formulario = () => {
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="titulo"
        />
        <Campo
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(Prioridade).map((prioridade) => (
            <div key={prioridade}>
              <input
                value={Prioridade.IMPORTANTE}
                name="prioridade"
                type="radio"
                id={prioridade}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </div>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario

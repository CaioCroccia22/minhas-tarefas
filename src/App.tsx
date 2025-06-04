import ListaDeTarefas from './containers/ListaDeTarefas'
import BarraLateral from './containers/BarraLateral'
import EstiloGlobal, { Container } from './styles/'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App

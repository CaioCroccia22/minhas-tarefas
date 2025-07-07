import ListaDeTarefas from './containers/ListaDeTarefas'
import BarraLateral from './containers/BarraLateral'
import EstiloGlobal, { Container } from './styles/'
import store from './store'
import { Provider } from 'react-redux'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App

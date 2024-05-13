import { Provider } from "react-redux";
import BarraLateral from "./containers/Barra lateral";
import ListaDeTarefas from "./containers/Lista de tarefas";
import EstiloGlobal, { Container } from "./styles";

import store from './store'

function App() {
  return (
    <Provider store={store}>
    <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  );
}

export default App;

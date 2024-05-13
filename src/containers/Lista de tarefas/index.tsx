import Tarefa from "../../components/Tarefa"
import { Container } from "./style"
import { useSelector } from "react-redux"

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const {itens} = useSelector((state: RootReducer) => state.tarefas)
  const {termo} = useSelector((state: RootReducer) => state.filtro)
  return (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;</p>
    <ul>
      {itens.map(t => (
        <li key={t.titulo}>
        <Tarefa
          id={t.id}
          descricao={t.descricao}
          titulo={t.titulo}
          status={t.status}
          prioridade={t.prioridade} />
        </li>
      ))}
    </ul>
  </Container>

  )
}

export default ListaDeTarefas

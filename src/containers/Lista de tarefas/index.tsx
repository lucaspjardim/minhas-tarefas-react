import Tarefa from "../../components/Tarefa"
import { Container } from "./style"

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      <li>
        <Tarefa />
        <Tarefa />
        <Tarefa />
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas

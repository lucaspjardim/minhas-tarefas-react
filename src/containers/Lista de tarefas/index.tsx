import Tarefa from "../../components/Tarefa"
import { Container } from "./style"

const tarefas = [
  {
    titulo: 'Estudar',
    descricao: 'Ver a aula 3',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Estudar',
    descricao: 'Ver a aula 8',
    prioridade: 'normal',
    status: 'concluida'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map(t => (
        <li key={t.titulo}>
        <Tarefa
          descricao={t.descricao}
          titulo={t.titulo}
          status={t.status}
          prioridade={t.prioridade} />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas

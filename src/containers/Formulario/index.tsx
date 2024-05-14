import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo} from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './style'
import * as enums from '../../Utils/enums/tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()

    dispatch(cadastrar({
      titulo,
      prioridade,
      descricao,
      status: enums.Status.PENDENTE
    }))
  }

  return (
    <MainContainer>
    <Titulo>Nova tarefa</Titulo>
  <Form onSubmit={cadastrarTarefa}>
    <Campo value={titulo} onChange={e => setTitulo(e.target.value)} type="text" placeholder="Título" />
    <Campo value={descricao} onChange={({target}) => setDescricao(target.value)} as="textarea" placeholder="Descrição da tarefa" />
    <Opcoes>
      <p>Prioridade</p>
      {Object.values(enums.Prioridade).map(prioridade => (
      <Opcao key={prioridade}>
        <input value={prioridade} onChange={(e) => setPrioridade(e.target.value as enums.Prioridade)} name='prioridade' type="radio" id={prioridade} defaultChecked={prioridade === enums.Prioridade.NORMAL} /> {' '}
        <label htmlFor={prioridade}>{prioridade}</label>
        </Opcao>
      ))}
    </Opcoes>
    <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
  </Form>
  </MainContainer>
  )
}

export default Formulario

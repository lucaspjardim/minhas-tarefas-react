import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './style'
import { Botao, Campo } from '../../styles'
import * as enums from '../../Utils/enums/tarefa'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({mostrarFiltros}: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
  <S.Aside>
    <div>
      {mostrarFiltros ? (
     <>
      <Campo type="text" placeholder="Buscar" value={termo} onChange={e => dispatch(alteraTermo(e.target.value))} />
      <S.Filtros>
        <FiltroCard valor ={enums.Status.PENDENTE} criterio="status" legenda='pendentes' />
        <FiltroCard valor ={enums.Status.CONCLUIDA} criterio="status" legenda='concluidas'/>
        <FiltroCard valor ={enums.Prioridade.URGENTE} criterio="prioridade" legenda='urgentes'/>
        <FiltroCard valor ={enums.Prioridade.IMPORTANTE} criterio="prioridade" legenda='importantes'/>
        <FiltroCard valor ={enums.Prioridade.NORMAL} criterio="prioridade" legenda='normal'/>
        <FiltroCard criterio="todas" legenda='todos'/>
      </S.Filtros>
    </>
     ) : (
      <Botao onClick={() => navigate ('/')}>Voltar a lista de tarefas</Botao>
     )}
    </div>
  </S.Aside>
  )
}

export default BarraLateral

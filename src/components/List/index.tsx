import style from './List.module.scss';
import Items from './Items';
import { ITarefa } from '../../types/ITarefa';

//Criei uma interface props onde irá receber uma ITarefa e a função seleciona tarefa onde não irá retornar nenhum valor porém recebera como parametro uma tarefa selecionada do tipo ITarefa
interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
  }
  
  //Função do componente que recebe como parametro uma lista de tarefas e um metodo tipados como props
  function List({ tarefas, selecionaTarefa }: Props) {
    return (
      <aside className={style.listaTarefas}>
        <h2> Estudos do dia </h2>
        <ul>
          {tarefas.map(item => (
            <Items
              selecionaTarefa={selecionaTarefa}
              key={item.id}
              {...item}
            />
          ))}
        </ul>
      </aside>
    )
  }
  
  export default List;
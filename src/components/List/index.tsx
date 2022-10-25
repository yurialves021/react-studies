import style from './List.module.scss';
import Items from './Items';
import { ITarefa } from '../../types/ITarefa';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
  }
  
  
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
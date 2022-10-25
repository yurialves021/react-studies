import style from './List.module.scss';
import Items from './Items';
import {ITarefa} from '../../types/ITarefa';

const List = (props: { tarefas: ITarefa[] }) => {

    const { tarefas } = props;

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => {
                    return (<Items
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        key={index}
                    />);

                })}
            </ul>
        </aside>
    )
}

export default List;
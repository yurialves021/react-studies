import style from '../List.module.scss';
import {ITarefa} from '../../../types/ITarefa';

const Items = ({tarefa,tempo,selecionado,completado,id} : ITarefa) => {

    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Items;
import style from '../List.module.scss';

const Items = (props: { tarefa: string, tempo: string }) => {

    const { tarefa, tempo } = props;

    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Items;
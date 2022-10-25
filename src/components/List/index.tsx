import React from "react";
import style from './List.module.scss';
import Items from './Items';

const List = () => {

    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javascript',
            tempo: '01:00:00'
        }
    ];

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
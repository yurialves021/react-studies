import React, { useState, FormEvent, Dispatch, SetStateAction } from "react";
import style from './Form.module.scss';
import Button from '../Button/';
import { ITarefa } from '../../types/ITarefa';
import { v4 as uuidv4 } from 'uuid';

const Form = (props: {
    setTarefas: Dispatch<SetStateAction<ITarefa[]>>
}) => {

    const { setTarefas } = props;

    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00:00');
    const [selecionado, setSelecionado] = useState(false);
    const [completado, setCompletado] = useState(false);

    const adcionarTarefa = (e: FormEvent) => {
        e.preventDefault();

        setTarefas(tarefas => [...tarefas, { tarefa, tempo, id: uuidv4(), selecionado, completado }]);

       
        setTarefa('');
        setTempo('00:00')


    };

    return (

        <form className={style.novaTarefa} onSubmit={adcionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>

                <input
                    type="text"
                    placeholder="O que você quer estudar"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    name="tempo"
                    step="1"
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required />
            </div>
            <Button type="submit">Adcionar</Button>
        </form>


    );
}

export default Form;
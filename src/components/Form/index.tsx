import React from "react";
import './Form.scss';
import Button from '../Button/';


const Form = () => {
    return (

        <form className="novaTarefa">
            <div className="inputContainer">
                <label htmlFor="tarefa">Adicione um novo estudo</label>
          
                <input
                    type="text"
                    placeholder="O que você quer estudar"
                    name="tarefa"
                    id="tarefa"
                    required />
            </div>
            <div className="inputContainer">
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    name="tempo"
                    step="1"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required />
            </div>
            <Button />
        </form>


    );
}

export default Form;
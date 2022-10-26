import React, { useState } from 'react';
import Stopwatch from '../Stopwatch';
import Form from '../Form';
import List from '../List';
import { ITarefa } from '../../types/ITarefa';
import style from './App.module.scss';

function App() {
  //Criei um estado para as tarefas tipado como Itarefa que recebe um array
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  //Função para selecionar uma tarefa que recebe como parametro uma tarefa selecionada do tipo Itarefa
  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    //Adiciona ao estado de tarefas o retorno de uma nova array onde irá constar todas as tarefas, ao localizar a tarefa através do id ira mudar a propriedade selecionado para true
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  //Função para finalizar as tarefas concluídas
  function finalizarTarefa() {
    //caso o estado selecionado esteja true, irá colocar undefined novamente pois não terá mais nada selecionado
    if (selecionado) {
      setSelecionado(undefined);
      //adicionar ao estado de tarefas a array de tarefas onde a tarefa que havia sido selecionada recebera true no completado e o selecionado retorna para false
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Stopwatch
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
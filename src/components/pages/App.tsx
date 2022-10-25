import React, { useState } from 'react';
import Form from '../Form';
import List from '../List';
import Stopwatch from '../Stopwatch';
import style from './App.module.scss';
import { ITarefa } from '../../types/ITarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Stopwatch />
    </div>
  );
}

export default App;

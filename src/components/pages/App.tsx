import React from 'react';
import Form from '../Form';
import List from '../List';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
     <Form />
     <List />
    </div>
  );
}

export default App;

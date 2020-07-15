import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (name) => {
return (<li>{name}</li>);
}

const tarefa = ['Ler livro', 'Fazer tarefa'];
function App() {
  return (
    <ul className>
      {tarefa.map(el => task(el))}
    </ul>
  );
}

export default App;

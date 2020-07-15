import React from 'react';
import './App.css';
import Pokedex from './pokedex';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <Pokedex pokeballs = {data}/>
      </div>
    )
  }
}

export default App;
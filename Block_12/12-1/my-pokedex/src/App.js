import React from 'react';
import './App.css';
import Pokedex from './pokedex';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="global">
        <header>
          <h1>
            Pokedex Simple
          </h1>
        </header>
        <div className="global">
          <Pokedex pokeballs={data} />
        </div>
      </div>
    )
  }
}

export default App;
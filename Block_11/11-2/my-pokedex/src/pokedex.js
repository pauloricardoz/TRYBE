import React from 'react';
import Pokemon from './pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render(){
    return (
      <div className="pokedexDiv">
        {this.props.pokeballs.map(el => <Pokemon pokeball={el}/>)} 
      </div>
    )
  }
}
export default Pokedex;

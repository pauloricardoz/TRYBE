import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokeball;
    return (
      <div className="pokemonDiv">
        <p>{name}</p>
        <p>{type}</p>
        <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={image} alt={name}></img>
      </div>
    )
  }
}
export default Pokemon;
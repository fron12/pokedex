import React, { Component } from "react";
import "./styles/PokeList.css";

import PokeCell from "./PokeCell";

class PokeList extends Component {
  capitalize(pokemonName) {
    let pokemonLetterArray = pokemonName.split("");
    pokemonLetterArray[0] = pokemonLetterArray[0].toUpperCase();
    let pokemonWhole = pokemonLetterArray.join("");
    return pokemonWhole;
  }
  accessUrlNumber(url) {
    let strArray = url.split("");
    let checkArray = [];
    for (let i = 34; i < strArray.length; i++) {
      if (parseInt(strArray[i]) >= 0) {
        checkArray.push(parseInt(strArray[i]));
      }
    }
    let strNumber = checkArray.join("");
    return strNumber;
  }

  render() {
    return (
      <section className="poke-list">
        <input className="poke-filter" onChange={this.props.handleChange} />
        {this.props.pokemonList.map((pokemon, index) => {
          return (
            <PokeCell
              key={index}
              pokemonName={this.capitalize(pokemon.name)}
              value={pokemon.name}
              pokemonSprite={this.accessUrlNumber(pokemon.url)}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </section>
    );
  }
}

export default PokeList;

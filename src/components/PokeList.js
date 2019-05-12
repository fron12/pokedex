import React, { Component } from 'react';
import './styles/PokeList.css';

import PokeCell from './PokeCell';

class PokeList extends Component {
    capitalize(pokemonName) {
        let pokemonLetterArray = pokemonName.split("");
        pokemonLetterArray[0] = pokemonLetterArray[0].toUpperCase();
        let pokemonWhole = pokemonLetterArray.join("");
        return pokemonWhole;
    }
    render(){
        return(
            <section className="poke-list">
                {this.props.pokemonList.map((pokemon, index) => {
                    return(
                        <PokeCell 
                            key={index}
                            pokemonName={this.capitalize(pokemon.name)}
                            value={pokemon.name}
                            pokemonSprite={index + 1}
                            handleClick={this.props.handleClick}
                        />
                    )
                })}
            </section>
        )
    }
}

export default PokeList;
import React from 'react';
import './styles/PokeList.css';

import PokeCell from './PokeCell';

const PokeList = props => {
    return(
        <section className="poke-list">
            {props.pokemon.map((pokemon, index) => {
                return(
                    <PokeCell 
                        key={index}
                        name={pokemon.name}
                        pokemonSprite={index + 1}
                    />
                )
            })}
        </section>
    )
}

export default PokeList;
import React from 'react';
import './styles/PokeCell.css';

const PokeCell = props => {
    return (
        <button className="poke-cell">
            <img 
                src={require(`../Pokemon/${props.pokemonSprite}.png`)} 
                alt="sprite" 
            />
            <p>{props.name}</p>
        </button>
    )
}

export default PokeCell;
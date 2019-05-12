import React, { Component } from 'react';
import './styles/DetailView.css';

class DetailView extends Component {
    capitalize(pokemonName) {
        let pokemonLetterArray = pokemonName.split("");
        pokemonLetterArray[0] = pokemonLetterArray[0].toUpperCase();
        let pokemonWhole = pokemonLetterArray.join("");
        return pokemonWhole;
    }
    render(){
        const {id, name, sprite, type } = this.props.pokemon;
        return(
            <section className="detail-view">
                <div className="sprite-wrapper">
                    <img src={sprite} className="sprite-image" alt="sprite" />
                </div>
                <div className="data-wrapper">
                    <h1 className="data-name">ID: {id} Name: {this.capitalize(`${name}`)}</h1>
                    <p className="data-char">Type: {this.capitalize(`${type}`)}</p>
                    <p className="data-char">Description:</p>
                    {/* For description look up flavor-text at url api/v2/pokemon-species/name
                    and filter by language Ex: [0].language.name === "en" && 
                    [0].version.name === "alpha-sapphire" */}
                    {/* To Do: Iterate through and return multiple types if possible and
                    add pokemon description. */}
                </div>
            </section>
        );
    }
}

export default DetailView;
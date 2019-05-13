import React, { Component } from "react";
import "./styles/DetailView.css";

class DetailView extends Component {
  capitalize(pokemonName) {
    let pokemonLetterArray = pokemonName.split("");
    pokemonLetterArray[0] = pokemonLetterArray[0].toUpperCase();
    let pokemonWhole = pokemonLetterArray.join("");
    return pokemonWhole;
  }

  capitalizeArrayItems(types) {
    let typesArray = [];
    let splitTypes = types.split(",");
    if (splitTypes.length > 1) {
      for (let i = 0; i < splitTypes.length; i++) {
        let specificSplitType = splitTypes[i].split("");
        specificSplitType[0] = specificSplitType[0].toUpperCase();
        let specificJoinedType = specificSplitType.join("");
        typesArray.push(specificJoinedType);
      }
      return typesArray.join(", ");
    }
    return this.capitalize(types);
  }

  colorText(text) {}

  render() {
    const { id, name, sprite, type } = this.props.pokemon;
    const capitalizedType = this.capitalizeArrayItems(`${type}`);
    return (
      <section className="detail-view">
        <div className="sprite-wrapper">
          <img src={sprite} className="sprite-image" alt="sprite" />
        </div>
        <div className="data-wrapper">
          <h1 className="data-name">
            ID: {id} Name: {this.capitalize(`${name}`)}
          </h1>
          <p className="data-char" style={{}}>
            <strong>Type:</strong> {capitalizedType}
          </p>
          <p className="data-char, description">
            <strong>Description:</strong>
            <br /> {this.props.description}
          </p>
          {/* To-Do: color types like green for grass, blue for water.
           */}
        </div>
      </section>
    );
  }
}

export default DetailView;

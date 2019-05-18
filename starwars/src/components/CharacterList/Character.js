import React from "react";
import "../StarWars.css";

const Character = ({ character }) => {
  return (
    <li key={character.url} className="character-item">
      <ul className="character-info">
        <li className="character-info-item">
          <h2 className="character-info-item-heading">{character.name}</h2>
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Born: </span>
          {character.birth_year}
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Gender: </span>
          {character.gender}
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Height: </span>
          {`${character.height} cm`}
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Mass: </span>
          {`${character.mass} kg`}
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Hair: </span>
          {character.hair_color}
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Skin: </span>
          {character.skin_color}
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Eyes: </span>
          {character.eye_color}
        </li>
      </ul>
    </li>
  );
};

export default Character;

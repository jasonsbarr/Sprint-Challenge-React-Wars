import React from "react";
import "../StarWars.css";

const Character = ({ character }) => {
  return (
    <li key={character.url} className="character">
      <ul className="character-info">
        <li className="character-info-item">
          <h2 className="character-info-item-heading">{character.name}</h2>
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Born: </span>
          <span className="character-item-content">{character.birth_year}</span>
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Gender: </span>
          <span className="character-item-content">{character.gender}</span>
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Height: </span>
          <span className="character-item-content">
            {`${character.height} cm`}
          </span>
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Mass: </span>
          <span className="character-item-content">
            {`${character.mass} kg`}
          </span>
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Hair: </span>
          <span className="character-item-content">{character.hair_color}</span>
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Skin: </span>
          <span className="character-item-content">{character.skin_color}</span>
        </li>
        <li className="character-info-item">
          <span className="character-item-label">Eyes: </span>
          <span className="character-item-content">{character.eye_color}</span>
        </li>
      </ul>
    </li>
  );
};

export default Character;

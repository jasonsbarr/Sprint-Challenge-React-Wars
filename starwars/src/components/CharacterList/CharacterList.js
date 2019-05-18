import React from "react";
import Character from "./Character";
import "../StarWars.css";

const CharacterList = ({ characters }) => {
  return (
    <div id="star-wars-characters" className="characters">
      <ul className="character-list">
        {characters.map(character => (
          <Character character={character} />
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
``;

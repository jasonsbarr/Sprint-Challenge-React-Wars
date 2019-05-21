import React from "react";
import Character from "./Character";
import "../StarWars.css";

const CharacterList = ({ characters }) => {
  return (
    <ul className="characters-list">
      {characters.map(character => (
        <Character character={character} />
      ))}
    </ul>
  );
};

export default CharacterList;

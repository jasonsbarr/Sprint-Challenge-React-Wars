import React from "react";

const CharacterList = ({ characters }) => {
  return (
    <div className="characterContainer">
      {characters
        ? characters.map(character => (
            <div key={character.url} className="singleCharacter">
              <h3 className="characterName">{character.name}</h3>
              <p>{character.height}</p>
              <p>{character.mass}</p>
              <p>{character.hair_color}</p>
              <p>{character.eye_color}</p>
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default CharacterList;

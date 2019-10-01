import React from "react";
import styled from "styled-components";

const CharactersContainer = styled.div`
  background-color: rgba(61, 181, 229, 0.35);
  border-radius: 5px;
  margin: 0 auto 1rem;
  max-width: 500px;
  min-height: 100vh;
  padding: 1.5rem;
`;

const CharacterName = styled.h2`
  color: #2b2d2f;
  font-family: "Star Jedi", sans-serif;
  font-size: 2rem;
  text-align: center;
`;

const Label = styled.span`
  font-family: "Courier New", Courier, monospace;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Attribute = styled.p`
  margin: 0 auto 0.5rem;
  width: 50%;
`;

const CharacterList = ({ characters }) => {
  return (
    <CharactersContainer>
      {characters
        ? characters.map(character => (
            <div key={character.url}>
              <CharacterName className="characterName">
                {character.name}
              </CharacterName>
              <Attribute>
                <Label>Height:</Label> {character.height} cm
              </Attribute>
              <Attribute>
                <Label>Mass:</Label> {character.mass} kg
              </Attribute>
              <Attribute>
                <Label>Hair:</Label> {character.hair_color}
              </Attribute>
              <Attribute>
                <Label>Eyes:</Label> {character.eye_color}
              </Attribute>
            </div>
          ))
        : "Loading..."}
    </CharactersContainer>
  );
};

export default CharacterList;

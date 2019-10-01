import React, { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

const PageHeader = styled.h1`
  font-size: 4rem;
  font-family: "Star Jedi", sans-serif;
  margin: 1rem auto;
  text-align: center;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const fetchUser = () => {
    fetch(`https://swapi.co/api/people/`)
      .then(res => res.json())
      .then(chars => {
        setCharacters(chars.results);
      })
      .catch(err => console.error(err));
  };

  useEffect(fetchUser, []);

  return (
    <div>
      <PageHeader className="Header">React Wars</PageHeader>
      <CharacterList characters={characters} />
    </div>
  );
};
// characters={characters}

export default App;

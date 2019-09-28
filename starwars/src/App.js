import React, { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";

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
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList characters={characters} />
    </div>
  );
};
// characters={characters}

export default App;

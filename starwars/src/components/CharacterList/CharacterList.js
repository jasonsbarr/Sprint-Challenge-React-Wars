import React from "react";
import Character from "./Character";
import "../StarWars.css";

const CharacterList = ({ characters, ...props }) => {
  const showPageButton = page => {
    return props[page.toLowerCase()] ? (
      <button
        onClick={() => props.onGetPage(page.toLowerCase())}
        className={`btn btn-page ${page.toLowerCase()}`}
      >
        {page === "Previous" ? `« ${page}` : `${page} »`}
      </button>
    ) : null;
  };

  return (
    <div id="star-wars-characters" className="characters">
      <ul className="characters-list">
        {characters.map(character => (
          <Character character={character} />
        ))}
      </ul>
      <div className="characters-controls">
        {showPageButton("Previous")}
        {showPageButton("Next")}
      </div>
    </div>
  );
};

export default CharacterList;

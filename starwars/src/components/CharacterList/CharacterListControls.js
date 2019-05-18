import React from "react";

const CharacterListControls = ({ onGetPage, ...props }) => {
  const showPageButton = page => {
    return props[page.toLowerCase()] ? (
      <button
        onClick={() => onGetPage(page.toLowerCase())}
        className={`btn btn-page ${page.toLowerCase()}`}
      >
        {page === "Previous" ? `« ${page}` : `${page} »`}
      </button>
    ) : null;
  };

  return (
    <div className="characters-controls">
      {showPageButton("Previous")}
      {showPageButton("Next")}
    </div>
  );
};

export default CharacterListControls;

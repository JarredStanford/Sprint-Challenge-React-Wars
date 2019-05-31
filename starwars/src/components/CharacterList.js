import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="cards">
      {props.characters.map(character => (
        <Character key={character.created} characterOnProps={character} />
      ))}
    </div>
  );
};

export default CharacterList;

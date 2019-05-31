import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
      {props.characters.map(character => (
        <Character key={character.id} characterOnProps={character} />
      ))}
    </div>
  );
};

export default CharacterList;

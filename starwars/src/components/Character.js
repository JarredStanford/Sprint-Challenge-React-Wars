import React from "react";

const Character = props => {
  return (
    <div className="character">
      <h3>{props.characterOnProps.name}</h3>
      <p>DOB: {props.characterOnProps.birth_year}</p>
      <p>Height: {props.characterOnProps.height}</p>
    </div>
  );
};

export default Character;

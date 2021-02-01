import React from "react";

function CharacterSummary({ character }) {
  return character ? (
    <div>
      <h5>{character.name}</h5>
      <p>Level: {character.level}</p>
      <p>Experience: {character.exp}</p>
      <small>
        Fue: {character.str} Des: {character.des} Agi: {character.agi} Int: {character.int} Sab: {character.wis} Car: {character.char}
      </small>
    </div>
  ) : null;
}

export default CharacterSummary;

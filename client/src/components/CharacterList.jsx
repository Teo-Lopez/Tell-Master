import React from "react";

function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((char) => (
        <li>
          <p>
            <button>
              {char.name}. Nivel: {char.level}{" "}
            </button>
          </p>
          <small>
            Fue: {char.str} Des: {char.des} Agi: {char.agi} Int: {char.int} Sab: {char.wis} Car: {char.char}
          </small>
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;

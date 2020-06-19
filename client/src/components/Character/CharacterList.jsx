import React from "react";

function CharacterList({ characters, newSave }) {
  console.log(newSave);
  return (
    <ul>
      {characters.map((char) => (
        <li>
          <p>
            <button onClick={newSave ? () => newSave(char._id) : null}>
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

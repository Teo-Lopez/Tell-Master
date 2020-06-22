import React from "react";
import { Button } from "../Buttons";
import styled from "styled-components";
function CharacterList({ characters, newSave }) {
  const CustomLi = styled.li`
    margin: 15px 0;
  `;
  console.log(newSave);
  return characters.length ? (
    <ul>
      {characters.map((char) => (
        <CustomLi>
          <Button text={`${char.name}. Nivel: ${char.level}`} onClick={newSave ? () => newSave(char._id) : null} />
          <small>
            Fue: {char.str} Des: {char.des} Agi: {char.agi} Int: {char.int} Sab: {char.wis} Car: {char.char}
          </small>
        </CustomLi>
      ))}
    </ul>
  ) : (
    <div>
      <p>Aún no tienes personajes creados.</p>
    </div>
  );
}

export default CharacterList;

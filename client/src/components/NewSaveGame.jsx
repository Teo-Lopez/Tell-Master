import React, { useState } from "react";
import CharacterForm from "./CharacterForm";
import CharacterList from "./CharacterList";
import { Row, Col } from "react-bootstrap";

function NewSaveGame({ loggedInUser, setUser }) {
  const [character, setCharacter] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function toogleForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <h3>Elige un personaje para jugar: </h3>
      {loggedInUser.characters.length > 0 && <CharacterList characters={loggedInUser.characters} />}
      <button onClick={toogleForm}>También puedes crear un nuevo personaje</button>
      {showForm && <CharacterForm hideForm={toogleForm} setUser={setUser} loggedInUser={loggedInUser} setCharacter={setCharacter} />}
    </>
  );
}

export default NewSaveGame;

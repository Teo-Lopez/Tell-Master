import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import CharacterList from "./CharacterList";
import savedGamesService from "../services/savedGames.service";
import chapterService from "../services/chapter.service";
import { Row, Col } from "react-bootstrap";

function NewSaveGame({ loggedInUser, setUser, match, updateSavedGames }) {
  const ChapterService = new chapterService();
  const SavedGamesService = new savedGamesService();
  const [character, setCharacter] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function toogleForm() {
    setShowForm(!showForm);
  }

  function newSave(chosenCharacter) {
    ChapterService.getChaptersFromGame(match.params.gameId)
      .then((chapters) => {
        

        return SavedGamesService.createSavedGame({
          gameId: match.params.gameId,
          currentChapter: chapters[0]._id,
          character: chosenCharacter,
        });
      })
      .then((savedGame) => {
        updateSavedGames(savedGame);
        return SavedGamesService.assignSaveToUser(loggedInUser._id, savedGame._id);
      })
      .then((updatedUser) => {
        setUser(updatedUser);
      });
  }

  return (
    <>
      <h3>Elige un personaje para jugar: </h3>
      {loggedInUser.characters.length > 0 && <CharacterList newSave={newSave} characters={loggedInUser.characters} />}
      <button onClick={toogleForm}>También puedes crear un nuevo personaje</button>
      {showForm && <CharacterForm hideForm={toogleForm} setUser={setUser} loggedInUser={loggedInUser} setCharacter={setCharacter} />}
    </>
  );
}

export default withRouter(NewSaveGame);

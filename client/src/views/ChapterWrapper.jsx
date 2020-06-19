import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import savedGamesService from "../services/savedGames.service";
import Chapter from "../components/Chapter/Chapter";
import { Spinner } from "react-bootstrap";

function ChapterWrapper(props) {
  const SavedGamesService = new savedGamesService();
  const { match } = props;

  const [savedGame, setSavedGame] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    //Not sure if this is good practice for removing the warning...
    const update = () =>
      SavedGamesService.getFullSave(match.params.savedGameId).then((savedGame) => {
        console.log(savedGame, match.params.savedGameId);
        setSavedGame(savedGame);
        setReady(true);
      });
    update();
  }, [match.params.savedGameId]);

  function updateChapter() {
    SavedGamesService.getFullSave(match.params.savedGameId).then((savedGame) => {
      console.log(savedGame, match.params.savedGameId);
      setSavedGame(savedGame);
      setReady(true);
    });
  }

  return ready ? <Chapter updateChapter={updateChapter} game={savedGame} /> : <Spinner />;
}

export default withRouter(ChapterWrapper);

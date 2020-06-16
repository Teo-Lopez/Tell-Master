import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import gamesService from "../../services/games.service";
import savedGamesService from "../../services/savedGames.service";
import NewSaveGame from "../NewSaveGame";
import GameBriefing from "../GameBriefing";
import { Row, Col } from "react-bootstrap";

function GameOverView(props) {
  const GamesService = new gamesService();
  const SavedGamesService = new savedGamesService();

  const { match, location, history, loggedInUser, setUser } = props;
  const gameId = match.params.gameId;
  const [game, setGame] = useState(null);
  const [savedGames, setSavedGames] = useState([]);

  function updateSavedGames(newSave) {
    const savedGamesCopy = [...savedGames];
    savedGamesCopy.push(newSave);
    console.log(savedGamesCopy, "--------------COPIA------------");
    setSavedGames(savedGamesCopy);
  }

  useEffect(() => {
    GamesService.getOneGame(props.match.params.gameId).then((game) => setGame(game));
    loggedInUser && SavedGamesService.getUserSaves(loggedInUser._id).then((savedGames) => setSavedGames(savedGames));
  }, []);

  return props.noUser ? (
    <GameBriefing game={game} noUser={props.noUser} />
  ) : (
    <Row style={{ justifyContent: "space-between" }}>
      <Col lg={5}>
        <NewSaveGame updateSavedGames={updateSavedGames} setUser={setUser} loggedInUser={loggedInUser} />
      </Col>
      <Col lg={5}>
        <GameBriefing game={game} savedGames={savedGames} />
      </Col>
    </Row>
  );
}

export default withRouter(GameOverView);

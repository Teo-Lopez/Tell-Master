import React from "react";
import { withRouter } from "react-router";
import NewSaveGame from "../NewSaveGame";
import GameBriefing from "../GameBriefing";
import savedGamesService from "../../services/savedGames.service";
import { Row, Col } from "react-bootstrap";

function GameOverView(props) {
  const SavesService = new savedGamesService();
  const { match, location, history, loggedInUser, setUser } = props;
  const gameId = match.params.gameId;

  return (
    <Row style={{ justifyContent: "space-between" }}>
      <Col lg={5}>
        <NewSaveGame setUser={setUser} loggedInUser={loggedInUser} />
      </Col>
      <Col lg={5}>
        <GameBriefing />
      </Col>
    </Row>
  );
}

export default withRouter(GameOverView);

import React, { useEffect, useState } from "react";
import gamesService from "../services/games.service";
import { withRouter } from "react-router-dom";

function GameBriefing(props) {
  const GamesService = new gamesService();
  const [game, setGame] = useState(null);
  useEffect(() => {
    GamesService.getOneGame(props.match.params.gameId).then((game) => setGame(game));
  }, []);

  return !game ? (
    <p>loading game</p>
  ) : (
    <section>
      <article>
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        <button disabled={true}>Continuar la aventura!</button>
      </article>
    </section>
  );
}

export default withRouter(GameBriefing);

import React, { useEffect } from "react";

function LastGames({ games }) {
  return games.map((game) => (
    <div className="centered">
      <h3>{game.title}</h3>
      <em>Nivel minimo: {game.minLevel}</em>
      <p>{game.description.slice(0, 100)}</p>
    </div>
  ));
}

export default LastGames;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function LastGames({ games, loggedInUser }) {
  return games.map((game, idx) => (
    <div className="centered" key={idx}>
      <h3>
        <Link to={loggedInUser && loggedInUser._id === game.creator ? `/modify/${game._id}` : `/${game._id}`}>{game.title}</Link>
      </h3>
      <em>Nivel minimo: {game.minLevel}</em>
      <p>{game.description.slice(0, 350)}</p>
    </div>
  ));
}

export default LastGames;

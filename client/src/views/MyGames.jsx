import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import savedGamesService from "../services/savedGames.service";
import UserContext from "../UserContext";

function MyGames(props) {
  const loggedInUser = useContext(UserContext);
  const SavedGamesService = new savedGamesService();
  const [savedGames, setSavedGames] = useState(null);
  useEffect(() => {
    SavedGamesService.getAllSaves(loggedInUser._id).then((saves) => setSavedGames(saves));
  }, []);

  return !savedGames ? (
    <></>
  ) : savedGames.length ? (
    <ul>
      {savedGames.map((save) => {
        console.log(save);
        return (
          <Link to={`/read/${save.gameId._id}`}>
            <li>{save.gameId.description}</li>
          </Link>
        );
      })}
    </ul>
  ) : (
    <p>Aún no tienes historias en juego</p>
  );
}

export default MyGames;

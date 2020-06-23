import React, { useContext } from "react";

import { withRouter } from "react-router-dom";
import UserContext from "../../UserContext";

import StartPlayingButton from "./StartPlayingButton";
import SimpleStartPlaying from "./SimpleStartPlaying";
function GameBriefing(props) {
  const { game, savedGames, simple, updateSavedGames, setUser } = props;
  const loggedInUser = useContext(UserContext);

  return simple ? (
    <SimpleStartPlaying
      updateSavedGames={updateSavedGames}
      setUser={setUser}
      loggedInUser={loggedInUser}
      game={game}
      savedGames={savedGames}
    />
  ) : (
    <StartPlayingButton loggedInUser={loggedInUser} game={game} savedGames={savedGames} />
  );
}

export default withRouter(GameBriefing);

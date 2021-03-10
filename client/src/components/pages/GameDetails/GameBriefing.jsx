import React, { useContext } from "react";

import { withRouter } from "react-router-dom";
import UserContext from "../../../UserContext";

import StartPlayingButton from "./StartPlayingButton";
import SimpleStartPlaying from "./SimpleStartPlaying";
function GameBriefing(props) {
  const { game, savedGames, simple, updateSavedGames, noUser } = props;
  const {loggedInUser, setUser} = useContext(UserContext);

  return simple ? (
    <SimpleStartPlaying
      noUser={noUser}
      updateSavedGames={updateSavedGames}
      setUser={setUser}
      loggedInUser={loggedInUser}
      game={game}
      savedGames={savedGames}
    />
  ) : (
    <StartPlayingButton noUser={noUser} loggedInUser={loggedInUser} game={game} savedGames={savedGames} />
  );
}

export default withRouter(GameBriefing);

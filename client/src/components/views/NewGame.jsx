import React from "react";
import NewGameForm from "../NewGameForm";
function NewGame({ loggedInUser, updateLastGames }) {
  return <NewGameForm updateLastGames={updateLastGames} loggedInUser={loggedInUser}></NewGameForm>;
}

export default NewGame;

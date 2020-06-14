import React from "react";
import NewGameForm from "../NewGameForm";
import CarouselWrapper from "../CarouselWrapper";

function NewGame({ loggedInUser, updateLastGames }) {
  return <NewGameForm updateLastGames={updateLastGames} loggedInUser={loggedInUser}></NewGameForm>;
}

export default NewGame;

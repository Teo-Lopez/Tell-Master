import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./layout/Navbar";
import LastGames from "./components/LastGames";
import gamesService from "./services/games.service";

function App() {
  const GamesService = new gamesService();
  const [lastGames, setlastGames] = useState([]);
  //Recover games on mount
  useEffect(() => {
    GamesService.getLastGames().then((last10) => setlastGames(last10));

    return () => {};
  }, []);

  return (
    <Switch>
      <>
        <Navbar />
        <Route exact path="/" render={() => <LastGames games={lastGames} />} />
      </>
    </Switch>
  );
}

export default App;

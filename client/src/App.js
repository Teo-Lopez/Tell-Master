import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./layout/Navbar";
import LastGames from "./components/views/LastGames";
import MyGames from "./components/views/MyGames";
import gamesService from "./services/games.service";
import authService from "./services/auth.service";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import CenteredModal from "./components/Modal";

function App() {
  const GamesService = new gamesService();
  const AuthService = new authService();

  const [lastGames, setlastGames] = useState([]);
  const [loggedInUser, setloggedInUser] = useState(false);

  function setUser(user) {
    setloggedInUser(user);
  }
  //Recover games on mount
  useEffect(() => {
    GamesService.getLastGames().then((last10) => {
      console.log(!last10.every((elm) => lastGames.find((game) => game._id == elm._id)));
      if (Array.isArray(last10) && !last10.every((elm) => lastGames.find((game) => game._id == elm._id))) {
        setlastGames(last10);
      }
    });

    return () => {
      setlastGames([]);
    };
  }, []);

  useEffect(() => {
    if (loggedInUser == false) {
      AuthService.loggedin().then((user) => {
        if (user) setloggedInUser(user);
        else setloggedInUser(null);
      });
    }
    return () => {};
  }, [loggedInUser]);

  const [loginModal, setloginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  return (
    <Switch>
      <>
        <Navbar showSignup={() => setSignupModal(true)} showLogin={() => setloginModal(true)} loggedInUser={loggedInUser} />
        <CenteredModal title={"Login"} show={loginModal} onHide={() => setloginModal(false)}>
          <LoginForm setUser={setUser} />
        </CenteredModal>
        <CenteredModal title={"Signup"} show={signupModal} onHide={() => setSignupModal(false)}>
          <SignupForm setUser={setUser} />
        </CenteredModal>
        <Route exact path="/" render={() => <LastGames games={lastGames} />} />
        {/* <Route exact path="/login" render={() => <LoginForm setUser={setUser} />} /> */}
        <Route exact path="/signup" render={() => <SignupForm setUser={setUser} />} />
        <Route exact path="/myGames" render={() => <MyGames loggedInUser={loggedInUser} />} />
      </>
    </Switch>
  );
}

export default App;

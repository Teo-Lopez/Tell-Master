import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./layout/Navbar";
import LastGames from "./views/LastGames";
import MyGames from "./views/MyGames";
import gamesService from "./services/games.service";
import authService from "./services/auth.service";
import LoginForm from "./components/Auth/LoginForm";
import SignupForm from "./components/Auth/SignupForm";
import CenteredModal from "./components/utils/Modal";
import NewGame from "./views/NewGame";
import EditChapters from "./views/EditChapters";
import GameOverview from "./views/GameOverView";
import CharacterList from "./components/Character/CharacterList";
import ChapterWrapper from "./views/ChapterWrapper";
import MyCreatedGames from "./views/MyCreatedGames";
import FinishedGame from "./views/FinishedGame";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { UserProvider } from "./UserContext";
import { darkTheme } from "./themeContext";

function App() {
  const GamesService = new gamesService();
  const AuthService = new authService();

  const [lastGames, setlastGames] = useState([]);
  const [loggedInUser, setloggedInUser] = useState(false);

  function logout() {
    AuthService.logout().then(() => setloggedInUser(null));
  }

  function setUser(user) {
    setloggedInUser(user);
  }

  function updateLastGames() {
    GamesService.getLastGames().then((last10) => {
      if (Array.isArray(last10) && !last10.every((elm) => lastGames.find((game) => game._id === elm._id))) {
        setlastGames(last10);
      }
    });
  }

  //Recover games on mount
  useEffect(() => {
    updateLastGames();
    return () => {
      setlastGames([]);
    };
  }, []);

  useEffect(() => {
    if (loggedInUser === false) {
      AuthService.loggedin().then((user) => {
        if (user) setloggedInUser(user);
        else setloggedInUser(null);
      });
    }
    return () => {};
  }, []);

  const [loginModal, setloginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const GlobalStyle = createGlobalStyle`
    html, body {
      overflow: hidden;
    }
    body {
      color: ${darkTheme.colors.general};
      background-color: ${darkTheme.background.general};
      -webkit-overflow-scrolling: touch;
    }
    a {
      color: #eee;
    }
    a:hover {
      color: #eee;
      text-decoration: none;
    }
`;

  return (
    <Switch>
      <ThemeProvider theme={darkTheme}>
        <UserProvider value={loggedInUser}>
          <GlobalStyle />
          <Navbar
            logout={logout}
            showSignup={() => setSignupModal(true)}
            showLogin={() => setloginModal(true)}
            loggedInUser={loggedInUser}
          />
          <Container fluid>
            <main style={{ height: "calc(100vh - 60px)" }} className="app-wrapper">
              <Route exact path="/" render={() => <LastGames loggedInUser={loggedInUser} games={lastGames} />} />
              {loggedInUser ? (
                <>
                  <Route exact path="/myGames" render={() => <MyGames loggedInUser={loggedInUser} />} />
                  <Route exact path="/myCreatedGames" render={() => <MyCreatedGames loggedInUser={loggedInUser} />} />
                  <Route exact path="/newGame" render={() => <NewGame updateLastGames={updateLastGames} loggedInUser={loggedInUser} />} />
                  <Route exact path="/myCharacters" render={() => <CharacterList characters={loggedInUser.characters} />} />
                  <Route
                    exact
                    path="/modify/:gameId"
                    render={({ match, history }) => (
                      <EditChapters history={history} match={match} updateLastGames={updateLastGames} loggedInUser={loggedInUser} />
                    )}
                  />
                  <Route exact path="/chapter/:savedGameId" render={() => <ChapterWrapper />} />
                  <Route exact path="/read/:gameId" render={() => <GameOverview setUser={setUser} loggedInUser={loggedInUser} />} />
                  <Route exact path="/finished/:saveId" render={() => <FinishedGame loggedInUser={loggedInUser} />} />

                  {/* <Route exact path="/flowchart/:gameId" render={() => <GameFlowChart />} /> */}
                </>
              ) : (
                <>
                  <Route exact path="/read/:gameId" render={() => <GameOverview noUser setUser={setUser} loggedInUser={loggedInUser} />} />
                  <Route exact path="/:algo">
                    <h1>Para ver este contenido has de estar logueado</h1>
                  </Route>
                  <CenteredModal title={"Login"} show={loginModal} onHide={() => setloginModal(false)}>
                    <LoginForm setUser={setUser} />
                  </CenteredModal>
                  <CenteredModal title={"Signup"} show={signupModal} onHide={() => setSignupModal(false)}>
                    <SignupForm setUser={setUser} />
                  </CenteredModal>
                </>
              )}
            </main>
          </Container>
        </UserProvider>
      </ThemeProvider>
    </Switch>
  );
}

export default App;

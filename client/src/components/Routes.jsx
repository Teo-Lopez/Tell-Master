import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import GameDetails from './pages/GameDetails/GameDetails'
import LastGames from './pages/LastGames/LastGames'
import PlayedGames from './pages/PlayedGames/PlayedGames'
import CreatedGames from './pages/CreatedGames/CreatedGames'
import NewGame from './pages/NewGame/NewGame'
import MyCharacters from './pages/MyCharacters/MyCharacters'
import EditGame from './pages/EditGame/EditGame'
import ChapterWrapper from './pages/PlayingGame/PlayingGame'
import FinishedGame from './pages/FinishedGame/FinishedGame'
import Protected from './Protected.routes'

function Routes({ loggedInUser, setloginModal, setUser }) {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home showLogin={setloginModal} />} />
			<Route exact path='/lastGames' render={() => <LastGames loggedInUser={loggedInUser} />} />
			<Route
				exact
				path='/read/:gameId'
				render={() => <GameDetails setUser={setUser} loggedInUser={loggedInUser} />}
			/>
			<Protected condition={loggedInUser}>
				<Route
					exact
					path='/playedGames'
					render={() => <PlayedGames loggedInUser={loggedInUser} />}
				/>
				<Route
					exact
					path='/createdGames'
					render={() => <CreatedGames loggedInUser={loggedInUser} />}
				/>
				<Route exact path='/newGame' render={() => <NewGame loggedInUser={loggedInUser} />} />
				<Route
					exact
					path='/myCharacters'
					render={() => <MyCharacters characters={loggedInUser.characters} />}
				/>
				<Route
					exact
					path='/modify/:gameId'
					render={props => <EditGame {...props} loggedInUser={loggedInUser} />}
				/>
				<Route exact path='/chapter/:savedGameId' component={ChapterWrapper} />
				<Route
					exact
					path='/finished/:saveId'
					render={() => <FinishedGame loggedInUser={loggedInUser} />}
				/>
			</Protected>
		</Switch>
	)
}

export default Routes

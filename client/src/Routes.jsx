import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/views/Home'
import LastGames from './components/views/LastGames'
import MyGames from './components/views/MyGames'
import NewGame from './components/views/NewGame'
import EditGame from './components/views/EditGame'
import GameOverview from './components/views/GameOverView'
import ChapterWrapper from './components/views/ChapterWrapper'
import MyCreatedGames from './components/views/MyCreatedGames'
import FinishedGame from './components/views/FinishedGame'
import MyCharacters from './components/views/MyCharacters'

function Routes({ loggedInUser, setloginModal, setUser }) {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home showLogin={setloginModal} />} />
			<Route exact path='/lastGames' render={() => <LastGames loggedInUser={loggedInUser} />} />
			<Route exact path='/read/:gameId' render={() => <GameOverview setUser={setUser} loggedInUser={loggedInUser} />} />
			{loggedInUser && (
				<>
					<Route exact path='/myGames' render={() => <MyGames loggedInUser={loggedInUser} />} />
					<Route exact path='/myCreatedGames' render={() => <MyCreatedGames loggedInUser={loggedInUser} />} />
					<Route exact path='/newGame' render={() => <NewGame loggedInUser={loggedInUser} />} />
					<Route exact path='/myCharacters' render={() => <MyCharacters characters={loggedInUser.characters} />} />
					<Route exact path='/modify/:gameId' render={props => <EditGame {...props} loggedInUser={loggedInUser} />} />
					<Route exact path='/chapter/:savedGameId' render={() => <ChapterWrapper />} />
					<Route exact path='/finished/:saveId' render={() => <FinishedGame loggedInUser={loggedInUser} />} />
					{/* <Route exact path="/flowchart/:gameId" render={() => <GameFlowChart />} /> */}
				</>
			)}
		</Switch>
	)
}

export default Routes

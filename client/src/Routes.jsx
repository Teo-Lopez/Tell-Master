import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import LastGames from './views/LastGames'
import MyGames from './views/MyGames'
import NewGame from './views/NewGame'
import EditGame from './views/EditGame'
import GameOverview from './views/GameOverView'
import ChapterWrapper from './views/ChapterWrapper'
import MyCreatedGames from './views/MyCreatedGames'
import FinishedGame from './views/FinishedGame'
import MyCharacters from './views/MyCharacters'

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

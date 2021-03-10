import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import gamesService from '../../../services/games.service'
import savedGamesService from '../../../services/savedGames.service'
import NewSaveGame from './NewSaveGame'
import GameBriefing from './GameBriefing'
import { Row, Col } from 'react-bootstrap'

const GamesService = new gamesService()
const SavedGamesService = new savedGamesService()

function GameOverView(props) {
	const { match, loggedInUser, setUser } = props
	const gameId = match.params.gameId
	const [game, setGame] = useState(null)
	const [savedGames, setSavedGames] = useState([])

	useEffect(() => {
		GamesService.getOneGame(props.match.params.gameId).then(game => setGame(game))
		loggedInUser && SavedGamesService.getUserSaves(loggedInUser._id, gameId).then(savedGames => setSavedGames(savedGames))
	}, [props.match.params.gameId, loggedInUser, gameId])

	function updateSavedGames(newSave) {
		const savedGamesCopy = [...savedGames]
		savedGamesCopy.push(newSave)
		setSavedGames(savedGamesCopy)
	}

	return loggedInUser === null ? (
		<GameBriefing game={game} noUser={!loggedInUser} />
	) : !game ? (
		<>Loading</>
	) : game.simple ? (
		<GameBriefing simple updateSavedGames={updateSavedGames} setUser={setUser} game={game} savedGames={savedGames} />
	) : (
		<Row style={{ justifyContent: 'space-between' }}>
			<Col lg={5}>
				<NewSaveGame updateSavedGames={updateSavedGames} setUser={setUser} loggedInUser={loggedInUser} />
			</Col>
			<Col lg={5}>
				<GameBriefing game={game} savedGames={savedGames} />
			</Col>
		</Row>
	)
}

export default withRouter(GameOverView)

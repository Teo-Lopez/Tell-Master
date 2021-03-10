import React, { useEffect, useContext, useState } from 'react'
import CustomSpinner from '../../shared/Spinner'
import GameCard from '../../shared/GameCard'
import UserContext from '../../../UserContext'
import { Row, Col } from 'react-bootstrap'

import savedGamesService from '../../../services/savedGames.service'
const SavedGamesService = new savedGamesService()

function PlayedGames(props) {
	const loggedInUser = useContext(UserContext)
	const [savedGames, setSavedGames] = useState(null)
	const [ready, setReady] = useState(false)
	useEffect(() => {
		SavedGamesService.getAllSaves(loggedInUser._id).then(saves => {
			setSavedGames(saves)
			setReady(true)
		})
	}, [loggedInUser._id])

	return (
		<Row>
			{ready ? (
				savedGames?.map(savedGame => (
					<Col lg={3} md={6} sm={12}>
						<GameCard game={savedGame.game} />
					</Col>
				)) || <p>Aún no tienes historias en juego.</p>
			) : (
				<CustomSpinner />
			)}
		</Row>
	)
}

export default PlayedGames

import React, { useEffect, useContext, useState } from 'react'
import savedGamesService from '../services/savedGames.service'
import UserContext from '../UserContext'
import CustomSpinner from '../components/shared/Spinner'
import { Row, Col } from 'react-bootstrap'
import GameCard from '../components/Game/GameCard'
const SavedGamesService = new savedGamesService()

function MyGames(props) {
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
					<Col lg={3}>
						<GameCard game={savedGame.game} />
					</Col>
				)) || <p>Aún no tienes historias en juego.</p>
			) : (
				<CustomSpinner />
			)}
		</Row>
	)
}

export default MyGames

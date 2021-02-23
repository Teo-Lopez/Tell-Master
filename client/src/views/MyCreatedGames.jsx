import React, { useEffect, useContext, useState } from 'react'
import GameCard from '../components/Game/GameCard'
import { Row, Col } from 'react-bootstrap'
import gamesService from '../services/games.service'
import UserContext from '../UserContext'
import CustomSpinner from '../components/shared/Spinner'
const GamesService = new gamesService()

function MyCreatedGames(props) {
	const loggedInUser = useContext(UserContext)
	const [createdGames, setCreatedGames] = useState(null)
	const [ready, setReady] = useState(false)

	useEffect(() => {
		GamesService.getOwnedGames(loggedInUser._id).then(games => {
			setCreatedGames(games || null)
			setReady(true)
		})
	}, [loggedInUser._id])

	return (
		<Row>
			{ready ? (
				createdGames?.map(game => (
					<Col lg={3}>
						<GameCard game={game} />
					</Col>
				)) || <p>Aún no tienes historias en juego.</p>
			) : (
				<CustomSpinner />
			)}
		</Row>
	)
}

export default MyCreatedGames

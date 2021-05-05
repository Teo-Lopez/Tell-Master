import React, { useEffect, useContext, useState } from 'react'
import GameCard from '../../shared/GameCard'
import { Row, Col } from 'react-bootstrap'
import gamesService from '../../../services/games.service'
import UserContext from '../../../UserContext'
import CustomSpinner from '../../shared/Spinner'
const GamesService = new gamesService()

function CreatedGames() {
	const { loggedInUser } = useContext(UserContext)
	const [createdGames, setCreatedGames] = useState(null)
	const [ready, setReady] = useState(false)

	useEffect(() => {
		GamesService.getOwnedGames(loggedInUser._id).then(games => {
			setCreatedGames(games || null)
			setReady(true)
		})
	}, [loggedInUser._id])

	return (
		<section style={{ padding: '24px' }}>
			<Row>
				<CustomSpinner ready={ready}>
					{createdGames?.map((game, idx) => (
						<Col key={idx} lg={4} style={{ height: '500px' }}>
							<GameCard game={game} />
						</Col>
					)) || <p>Aún no tienes historias en juego.</p>}
				</CustomSpinner>
			</Row>
		</section>
	)
}

export default CreatedGames

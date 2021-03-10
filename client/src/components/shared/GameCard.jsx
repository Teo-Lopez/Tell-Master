import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserContext from '../../UserContext'

function GameCard({ game }) {
	const { loggedInUser } = useContext(UserContext)

	return (
		<Card bg='dark' style={{ height: '200px', width: '16rem', margin: '10px 0' }}>
			<Card.Header>{game.title}</Card.Header>
			<Card.Body>
				<Card.Text>{game.description}</Card.Text>
				<Card.Link as={Link} to={`/read/${game._id}`}>
					Jugar
				</Card.Link>
				{loggedInUser._id === game.creator && (
					<Card.Link as={Link} to={`/modify/${game._id}`}>
						Editar
					</Card.Link>
				)}
			</Card.Body>
		</Card>
	)
}

export default GameCard

import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserContext from '../../UserContext'

function GameCard({ game }) {
	const loggedInUser = useContext(UserContext)

	return (
		<Card bg='dark' style={{ width: '18rem', margin: '10px 0' }}>
			<Card.Body>
				<Card.Title>{game.title}</Card.Title>
				{!game.simple && <Card.Subtitle className='mb-2 text-muted'>Nivel mínimo: {game.minLevel}</Card.Subtitle>}
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

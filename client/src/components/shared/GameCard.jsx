import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserContext from '../../UserContext'
import { isOwn } from '../../utils'
import { Button } from './Buttons'
import Clamper from './Clamper'
import logo from '../layout/invertedlogo.png'

const ActiveCard = styled.div`
	background-color: ${({ theme }) => theme.colors.dark};
	max-height: 100%;
	text-align: center;
	height: 100%;
	overflow: hidden;

	a {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}

	header,
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 2px;
		height: 10%;
	}

	.main-card {
		height: 80%;
		padding: ${({ theme }) => theme.spacings.m};
		overflow-y: scroll;
		//Hides scrollbar
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		/*same for chrome*/
		&::-webkit-scrollbar {
			display: none;
		}

		img {
			height: 50%;
			padding: 10px;
			object-fit: contain;
		}
	}

	&:hover {
		box-shadow: 1px 2px 1px 1px rgba(250, 250, 250, 0.2);
	}

	header {
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	}
`

function GameCard({ game }) {
	const { loggedInUser } = useContext(UserContext)
	return game.active ? (
		<ActiveCard>
			<header>{game.title}</header>
			<div className='main-card'>
				<img src={game.cover || logo}></img>
				<Clamper
					id={game.id}
					text={game.description}
					lines={4}
					buttonColor='greenish'
				/>
			</div>
			<footer>
				<Link to={`/read/${game._id}`}>
					<Button>Detalles</Button>
				</Link>
			</footer>
		</ActiveCard>
	) : (
		<Card bg='danger'>
			<Card.Header>{game.title}</Card.Header>
			<Card.Body>
				<Card.Text>{game.description}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<p>Partida deshabilitada</p>
			</Card.Footer>
		</Card>
	)
}

export default GameCard

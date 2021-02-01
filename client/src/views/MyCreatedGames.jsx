import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import gamesService from '../services/games.service'
import UserContext from '../UserContext'
const GamesService = new gamesService()

function MyCreatedGames(props) {
	const loggedInUser = useContext(UserContext)
	const [createdGames, setCreatedGames] = useState(null)

	useEffect(() => {
		GamesService.getOwnedGames(loggedInUser._id).then(games => setCreatedGames(games))
	}, [loggedInUser._id])

	return !createdGames ? (
		<></>
	) : createdGames.length ? (
		<ul>
			{createdGames.map(game => {
				return (
					<>
						<li>{game.title}</li>
						<Link to={`/read/${game._id}`}>Jugar</Link>
						<br></br>
						<Link to={`/modify/${game._id}`}>Editar</Link>
					</>
				)
			})}
		</ul>
	) : (
		<p>Aún no tienes historias en juego</p>
	)
}

export default MyCreatedGames

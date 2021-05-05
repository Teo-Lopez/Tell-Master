import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import playingTable from './playingTable.png'
import { preloadDice } from '../../../utils'
import gamesService from '../../../services/games.service'
import { areDeepEqual } from '../../../utils'

const GamesService = new gamesService()

//#region styling
const MainsSectionWrapper = styled.section`
	text-align: center;
	max-height: ${({ theme }) => theme.sizes.getFullMain()};
	padding-top: 40px;
	overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`

const Background = styled.img`
	position: absolute;
	left: 5%;
	top: 100px;
	z-index: -9000;
	transform: rotate(-15deg);
	opacity: 0.5;
	filter: blur(1px);
	filter: contrast(70%);
`

const MainSection = styled.article`
	margin: 20px;
`

const appear = keyframes`
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    `

const Title = styled.h1`
	animation: ${appear} 1.5s ease-out;
	text-align: center;
`

//TODO animation appear
const GameCard = styled.div`
	margin: 10px 0;
	padding: 10px 0;
	border-radius: 2px;

	h2 {
		text-transform: capitalize;
	}
	&:hover {
		transition: background-color 0.3s;
	}
`
//#endregion styling

const checkForNewGames = oldGames =>
	GamesService.getLastGames().then(
		({ data }) => !areDeepEqual(data, oldGames) && data
	)

function LastGames({ loggedInUser }) {
	const [isPreloaded, setisPreloaded] = useState(false)
	const [lastGames, setlastGames] = useState([])

	useEffect(() => {
		checkForNewGames(lastGames).then(data => {
			data && setlastGames(data)
		})
	}, [lastGames])

	//preload dice for use in stories
	useEffect(() => {
		if (!isPreloaded) {
			preloadDice()
			setisPreloaded(true)
		}
	}, [isPreloaded])

	return (
		<div id='container1' style={{ overflow: 'hidden' }}>
			<Title>Últimas historias</Title>
			<hr />
			<MainsSectionWrapper id='container2'>
				<Background src={playingTable} />
				<MainSection>
					{lastGames?.map((game, idx) => (
						<Link
							key={idx}
							to={
								loggedInUser && loggedInUser._id === game.creator
									? `/modify/${game._id}`
									: `/read/${game._id}`
							}
						>
							<GameCard key={idx}>
								<h2>{game.title}</h2>
								<em>Nivel minimo: {game.minLevel}</em>
								<p>{game.description.slice(0, 350)}</p>
							</GameCard>
						</Link>
					))}
				</MainSection>
			</MainsSectionWrapper>
		</div>
	)
}

export default LastGames

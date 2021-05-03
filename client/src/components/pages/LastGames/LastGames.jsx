import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import playingTable from './playingTable.png'
import D6 from '../../shared/assets/d6book.svg'
import D20 from '../../shared/assets/d20.svg'
import gamesService from '../../../services/games.service'

const GamesService = new gamesService()

//#region styling
const MainsSectionWrapper = styled.section`
	background-color: ${props => props.theme.colors.greenish};
	text-align: center;
	height: 80vh;
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
	color: ${props => props.theme.colors.general};
	text-align: center;
`

//TODO animation appear
const GameCard = styled.div`
	margin: 10px 0;
	padding: 10px 0;
	border-radius: 2px;
	animation: ${appear} 1.5s ease-out;

	@for $i from 1 through 10 {
		&:nth-child(#{$i}) {
			animation-delay: #{$i * 2}s;
		}
	}

	h2 {
		text-transform: capitalize;
	}
	&:hover {
		background-color: ${props => props.theme.background.overlay};
		transition: background-color 0.3s;
	}
`
//#endregion styling

const preloadDice = () => {
	const mainBackgroundPreload = document.createElement('link')
	mainBackgroundPreload.rel = 'preload'
	mainBackgroundPreload.as = 'image'
	mainBackgroundPreload.href = playingTable

	const d6Prefetch = document.createElement('link')
	const d20Prefetch = document.createElement('link')
	d6Prefetch.rel = 'prefetch'
	d20Prefetch.rel = 'prefetch'
	d6Prefetch.href = D6
	d20Prefetch.href = D20
	d6Prefetch.as = 'image'
	d20Prefetch.as = 'image'

	document.head.append(d6Prefetch)
	document.head.append(d20Prefetch)
	document.head.append(mainBackgroundPreload)
}

const getNewGames = oldGames => {
	return GamesService.getLastGames().then(lastGames => {
		return oldGames.every(old =>
			lastGames.every(newGame => old._id === newGame._id)
		)
			? lastGames
			: null
	})
}

function LastGames({ loggedInUser }) {
	const [isPreloaded, setisPreloaded] = useState(false)
	const [lastGames, setlastGames] = useState([])

	useEffect(() => {
		getNewGames(lastGames).then(
			updatedList => updatedList && setlastGames(updatedList)
		)
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
					{lastGames.length
						? lastGames.map((game, idx) => (
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
						  ))
						: null}
				</MainSection>
			</MainsSectionWrapper>
		</div>
	)
}

export default LastGames

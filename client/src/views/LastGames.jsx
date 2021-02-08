import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import playingTable from './assets/playingTable.png'
import D6 from '../components/Game/assets/d6book.svg'
import D20 from '../components/Game/assets/d20.svg'

const MainsSectionWrapper = styled.section`
	background-color: ${props => props.theme.background.lightOverlay};
	text-align: center;
	height: 80vh;
	padding-top: 40px;
	overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`

const upwardTransition = keyframes`
    from {
      opacity: 0;
      transform: translateY(1000px)
    }
    
    to {
      opacity: 1;
      transform: translateY(0px)
    }
  `

const imgTransition = keyframes`
    from {
      transform: translateY(1000px) rotate(0deg)
    }
    
    to {
      rotate(-15deg)
      /* rotate(-15deg) */
      transform: translateY(0px) rotate(-15deg)
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
	animation: ${imgTransition} 3s cubic-bezier(0.71, 0.57, 0.46, 0.92);
`

const MainSection = styled.article`
	margin: 20px;
	transform: translateY();
	animation: ${upwardTransition} 4s ease-out;
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
	font-size: 3em;
	animation: ${appear} 5s ease-out;
	color: ${props => props.theme.colors.general};
	font-weight: 900;
	letter-spacing: 5px;
	text-align: center;
`

const GameCard = styled.div`
	margin: 10px 0;
	padding: 10px 0;
	border-radius: 2px;

	p {
		font-size: 1.2em;
	}

	&:hover {
		h2 {
			transition: font-size 500ms;
			font-size: 1.4em;
		}
		font-size: 1.3em;
		background-color: ${props => props.theme.background.overlay};
	}
`

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

function LastGames({ games, loggedInUser }) {
	const [isPreloaded, setisPreloaded] = useState(false)
	useEffect(() => {
		if (!isPreloaded) {
      preloadDice()
			setisPreloaded(true)
		}
	}, [isPreloaded])

	return (
		<div id='container1' style={{ overflow: 'hidden' }}>
			<Title>Últimas historias</Title>
			<MainsSectionWrapper id='container2'>
				<Background src={playingTable} />
				<MainSection>
					{games.map((game, idx) => (
						<Link to={loggedInUser && loggedInUser._id === game.creator ? `/modify/${game._id}` : `/read/${game._id}`}>
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

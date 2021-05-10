import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { MediumButton } from '../../shared/Buttons'

const Brief = styled.article`
	margin: 0 auto;
	text-align: center;
	padding: ${({ theme }) => theme.spacings.l};

	.main-info {
		display: flex;
		justify-content: space-around;
		padding-top: ${({ theme }) => theme.spacings.l};
		font-size: 1.2em;
		img {
			width: 40%;
		}
	}
`

function GameBriefing(props) {
	const { game } = props
	//ONGOING reworking Gamedetails, now working on gameBriefing being an actual briefing
	return (
		<Brief>
			<h2>{game.title}</h2>
			<div className='main-info'>
				<div class="left-col">
					<p>{game.description}</p>
				</div>
				<img src={game.cover} alt='game cover' />
			</div>
		</Brief>
	)
}

export default withRouter(GameBriefing)

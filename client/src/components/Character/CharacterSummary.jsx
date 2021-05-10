import React from 'react'
import styled from 'styled-components'

const SummaryWrapper = styled.article`
	.level-block {
		display: flex;
		p {
			padding-right: ${({ theme }) => theme.spacings.l};
		}
	}
	.stat-block {
		display: flex;
		ul {
			padding-left: 0;
			padding-right: ${({ theme }) => theme.spacings.m};
		}
		li {
			list-style: none;
		}
	}
`

function CharacterSummary({ character, showName = true }) {
	return (
		character && (
			<SummaryWrapper>
				{showName && <h5>{character.name}</h5>}
				<div className='level-block'>
					<p>Nivel: {character.level}</p>
					<p>Experiencia: {character.px} pts</p>
				</div>
				<div className='stat-block'>
					<ul>
						<li> Fue: {character.stats.str}</li>
						<li> Des: {character.stats.des}</li>
						<li>Agi: {character.stats.agi}</li>
					</ul>
					<ul>
						<li> Int: {character.stats.int} </li>
						<li>Sab: {character.stats.wis}</li>
						<li>Car: {character.stats.char}</li>
					</ul>
				</div>
			</SummaryWrapper>
		)
	)
}

export default CharacterSummary

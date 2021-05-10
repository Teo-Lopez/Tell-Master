import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { Button, MediumButton } from '../../shared/Buttons'
import CustomSpinner from '../../shared/Spinner'
import styled from 'styled-components'
import CharacterSummary from '../../Character/CharacterSummary'

const List = styled.ul`
	padding: 0;
	margin-top: ${({ theme }) => theme.spacings.l};
	.character-card {
		overflow-y: hidden;
		//Hides scrollbar
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		/*same for chrome*/
		&::-webkit-scrollbar {
			display: none;
		}
		padding: ${({ theme }) => theme.spacings.m};
		background-color: ${({ theme }) => theme.colors.darkBlue};
	}
`

function SavedGamesList(props) {
	const { game, savedGames, loggedInUser } = props

	return (
		<CustomSpinner ready={game}>
			<List>
				{savedGames?.map(({ _id, character }) => (
					<Link to={`/chapter/${_id}`}>
						<div className='character-card'>
							<CharacterSummary character={character} />
						</div>
					</Link>
				))}
			</List>
		</CustomSpinner>
	)
}

export default SavedGamesList

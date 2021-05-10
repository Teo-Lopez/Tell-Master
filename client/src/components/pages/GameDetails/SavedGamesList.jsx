import React from 'react'
import { Link } from 'react-router-dom'
import CustomSpinner from '../../shared/Spinner'
import styled from 'styled-components'
import SaveSummary from './SaveSummary'
import { Col, Row } from 'react-bootstrap'

const List = styled.ul`
	padding: 0;
	margin-top: ${({ theme }) => theme.spacings.l};

	.save-card {
		margin-bottom: ${({ theme }) => theme.spacings.m};
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
	const { game, savedGames } = props

	return (
		<CustomSpinner ready={game}>
			<List>
				<Row>
					{savedGames?.map((elm, i) => (
						<Col lg={6}>
							<Link to={`/chapter/${elm._id}`} key={i}>
								<div className='save-card'>
									<SaveSummary save={elm} />
								</div>
							</Link>
						</Col>
					))}
				</Row>
			</List>
		</CustomSpinner>
	)
}

export default SavedGamesList

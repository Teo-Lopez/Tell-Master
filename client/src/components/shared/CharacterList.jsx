import React from 'react'
import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'

const ListPoint = styled.li`
	margin-top: ${({ theme }) => theme.spacings.l};
	display: flex;
	background-color: ${({ theme }) => theme.colors.darkBlue};
	border-radius: 5px;
	padding-top: ${({ theme }) => theme.spacings.m};
	padding-left: ${({ theme }) => theme.spacings.m};

	&:hover {
		cursor: pointer;
	}

	.info-block {
		padding-right: ${({ theme }) => theme.spacings.m};
	}
`
function CharacterList({ characters, onClick }) {
	return characters?.length ? (
		<ul style={{ paddingLeft: 0 }}>
			{characters.map(char => {
				return (
					<ListPoint onClick={() => onClick && onClick(char)}>
						<div className='info-block'>
							<p>{char.name}.</p>
							<p>Nivel: {char.level}</p>
						</div>
						<p className='details-button'>Detalles</p>
					</ListPoint>
				)
			})}
		</ul>
	) : (
		<div>
			<p>Aún no tienes personajes creados.</p>
		</div>
	)
}

const StyledColumnedList = styled(Row)`
	text-align: center;

	li {
		list-style: none;
		margin: ${({ theme }) => theme.spacings.l};
		background-color: ${({ theme }) => theme.colors.darkBlue};
		border-radius: 5px;
		padding: ${({ theme }) => theme.spacings.m};
		padding-top: ${({ theme }) => theme.spacings.l};

		&:hover {
			cursor: pointer;
		}

		.info-block {
			display: flex;
			justify-content: center;
			padding-right: ${({ theme }) => theme.spacings.m};
			p {
				margin-right: 12px;
			}
		}
		.details-button {
		}
	}
`
export const ColumnedList = ({ characters, onClick }) => {
	return characters.length ? (
		<Container fluid>
			<ul>
				<StyledColumnedList className='row'>
					{characters.map(char => {
						return (
							<Col lg={3} md={6} sm={12} onClick={() => onClick && onClick(char)}>
								<li>
									<div className='info-block'>
										<p>{char.name}.</p>
										<p>Nivel: {char.level}</p>
									</div>
									<p className='details-button'>Detalles</p>
								</li>
							</Col>
						)
					})}
				</StyledColumnedList>
			</ul>
		</Container>
	) : (
		<div>
			<p>Aún no tienes personajes creados.</p>
		</div>
	)
}

export default CharacterList

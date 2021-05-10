import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router'
import gamesService from '../../../services/games.service'
import savedGamesService from '../../../services/savedGames.service'
import NewSaveGame from './NewSaveGame'
import GameBriefing from './GameBriefing'
import CharacterSummary from '../../Character/CharacterSummary'
import { Row, Col, Container } from 'react-bootstrap'
import CharacterList from '../../shared/CharacterList'
import styled from 'styled-components'
import ModalContext from '../../../ModalContext'
import CustomSpinner from '../../shared/Spinner'
import SavedGamesList from './SavedGamesList'
import SimpleStartPlaying from './SimpleStartPlaying'
import { MediumButton } from '../../shared/Buttons'
import LoginForm from '../../Auth/LoginForm'
const GamesService = new gamesService()
const SavedGamesService = new savedGamesService()

const Section = styled.section`
	padding-top: ${({ theme }) => theme.spacings.l};

	.simple-briefing {
		margin: 0 auto;
		width: 80%;

		.button {
			width: 40%;
			margin: 0 auto;
		}
	}
`

function GameOverView(props) {
	const { match, loggedInUser, setUser } = props
	const gameId = match.params.gameId
	const [game, setGame] = useState(null)
	const [savedGames, setSavedGames] = useState([])

	const setModal = useContext(ModalContext)
	const openCharInfo = char =>
		setModal({
			show: true,
			component: <CharacterSummary showName={false} character={char} />,
			title: char.name
		})
	const openLogin = () =>
		setModal({
			show: true,
			component: <LoginForm />,
			title: 'Login'
		})

	useEffect(() => {
		GamesService.getOneGame(props.match.params.gameId)
			.then(res => setGame(res.data[0]))
			.catch(err => console.log(err))

		if (loggedInUser) {
			SavedGamesService.getUserSaves(loggedInUser?._id, gameId).then(response =>
				setSavedGames(response.data)
			)
		}
	}, [props.match.params.gameId, loggedInUser, gameId])

	const updateSavedGames = newSave => {
		const savedGamesCopy = [...savedGames]
		savedGamesCopy.push(newSave)
		setSavedGames(savedGamesCopy)
	}

	return (
		<Section className=''>
			<Container fluid>
				{!loggedInUser ? (
					<CustomSpinner ready={game}>
						<div className='simple-briefing'>
							<GameBriefing
								loggedInUser={loggedInUser}
								simple={game?.simple}
								updateSavedGames={updateSavedGames}
								setUser={setUser}
								game={game}
								savedGames={savedGames}
							/>
							<MediumButton className='button' onClick={openLogin}>
								Logeate para jugar!
							</MediumButton>
						</div>
					</CustomSpinner>
				) : (
					<Row style={{ justifyContent: 'space-around' }}>
						<Col lg={5}>
							<div className='character-select'>
								<h2>Elige un personaje para jugar esta historia:</h2>
								<CharacterList onClick={openCharInfo} characters={loggedInUser?.characters} />
								<NewSaveGame
									updateSavedGames={updateSavedGames}
									setUser={setUser}
									loggedInUser={loggedInUser}
								/>
							</div>
						</Col>
						<Col lg={5}>
							<div className='character-select'>
								<h2>O continua una partida guardada:</h2>
								{game?.simple ? (
									<SimpleStartPlaying
										updateSavedGames={updateSavedGames}
										setUser={setUser}
										loggedInUser={loggedInUser}
										game={game}
										savedGames={savedGames}
									/>
								) : (
									<SavedGamesList loggedInUser={loggedInUser} game={game} savedGames={savedGames} />
								)}
							</div>
						</Col>
					</Row>
				)}
			</Container>
		</Section>
	)
}

export default withRouter(GameOverView)

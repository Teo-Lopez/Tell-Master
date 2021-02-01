import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { Button } from '../Buttons'
import savedGamesService from '../../services/savedGames.service'
import chapterService from '../../services/chapter.service'
import characterService from '../../services/character.service'
import { withRouter } from 'react-router-dom'
const CharacterService = new characterService()
const SavedGamesService = new savedGamesService()
const ChapterService = new chapterService()

function SimpleStartPlaying(props) {
	const { game, savedGames, loggedInUser, setUser, updateSavedGames, history, match } = props

	function createCharAndSave() {
		const name = `Simple Game ${savedGames.length + 1}`

		CharacterService.createCharacter({
			name,
			hp: 1000,
			str: 100,
			des: 100,
			agi: 100,
			con: 100,
			int: 100,
			wis: 100,
			char: 100,
		}).then(char => {
			return CharacterService.assignCharacterToUser(loggedInUser._id, char._id).then(_ => newSave(char._id))
		})
	}
	function newSave(chosenCharacter) {
		ChapterService.getChaptersFromGame(match.params.gameId)
			.then(chapters => {
				return SavedGamesService.createSavedGame({
					gameId: match.params.gameId,
					currentChapter: chapters[0]._id,
					character: chosenCharacter,
				})
			})
			.then(savedGame => {
				updateSavedGames(savedGame)
				history.push(`/chapter/${savedGame._id}`)
				return SavedGamesService.assignSaveToUser(loggedInUser._id, savedGame._id)
			})
			.then(updatedUser => {
				setUser(updatedUser)
			})
	}
	function startGame() {
		createCharAndSave()
	}

	return !game && (!loggedInUser || props.noUser) ? (
		<p>Loading game</p>
	) : props.noUser ? (
		<section>
			<article>
				<h1>{game.title}</h1>
				<p>{game.description}</p>
				Para jugar, registrate.
			</article>
			createAndAssignCharacter
		</section>
	) : (
		<section>
			<article>
				<h1>{game.title}</h1>
				<p>{game.description}</p>

				{loggedInUser ? (
					game.chapters.length === 0 ? (
						<Button text='Aún no tiene ningún capitulo' disabled={true} onClick={startGame} />
					) : savedGames.length === 0 ? (
						<Button text='Comienza la partida' onClick={startGame} />
					) : (
						<>
							<Dropdown>
								<Dropdown.Toggle variant='transparent' id='dropdown-basic'>
									<Button text='Continua la aventura' />
								</Dropdown.Toggle>

								<Dropdown.Menu style={{ backgroundColor: 'rgba(40,40,40)' }} variant='transparent'>
									{savedGames.map(save => (
										<Link to={`/chapter/${save._id}`}>
											<Dropdown.Item as={'div'}>
												<Button text={save.character.name} />
											</Dropdown.Item>
										</Link>
									))}
									<Dropdown.Divider />
									<Dropdown.Item as={'div'}>
										<Button text={'Comienza una nueva aventura'} onClick={startGame}></Button>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</>
					)
				) : (
					<Button text='Continuar la aventura' disabled={true}></Button>
				)}
			</article>
		</section>
	)
}

export default withRouter(SimpleStartPlaying)

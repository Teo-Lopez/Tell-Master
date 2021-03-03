import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import savedGamesService from '../../services/savedGames.service'
import Chapter from '../Chapter/Chapter'
import { Spinner } from 'react-bootstrap'
const SavedGamesService = new savedGamesService()

function ChapterWrapper(props) {
	const { match } = props

	const [savedGame, setSavedGame] = useState(null)
	const [ready, setReady] = useState(false)

	useEffect(() => {
		//Not sure if this is good practice for removing the warning...
		const update = () =>
			SavedGamesService.getFullSave(match.params.savedGameId).then(savedGame => {
				setSavedGame(savedGame)
				setReady(true)
			})
		update()
	}, [match.params.savedGameId])

	function updateChapterOnSave() {
		SavedGamesService.getFullSave(match.params.savedGameId).then(savedGame => {
			if (savedGame.currentChapter.last) {
				savedGame.finished = true
				SavedGamesService.updateSavedGame({ savedGameId: match.params.savedGameId, finished: true })
			}
			setSavedGame(savedGame)
			setReady(true)
		})
	}

	return ready ? (
		savedGame.currentChapter ? (
			<Chapter updateChapterOnSave={updateChapterOnSave} game={savedGame} />
		) : (
			<div>
				<p>Esta aventura aún no tiene capitulos.</p>
			</div>
		)
	) : (
		<Spinner />
	)
}

export default withRouter(ChapterWrapper)

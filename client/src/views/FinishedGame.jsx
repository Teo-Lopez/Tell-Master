import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import savedGamesService from '../services/savedGames.service'
import chapterService from '../services/chapter.service'
const SavedGamesService = new savedGamesService()
const ChapterService = new chapterService()

function FinishedGame(props) {
	useEffect(() => {
		SavedGamesService.getFullSave(props.match.params.saveId).then(save => {
			const chaptersPromise = save.choicesTree.map(choice => {
				const target = choice.didSuccess ? choice.choice.successTargetChapter : choice.choice.failureTargetChapter
				return ChapterService.getChapter(target).then(chapter => chapter)
			})

			Promise.all(chaptersPromise)
				.then(chaptersTravelled => {})
				.catch(err => console.log(err))
		})
	}, [props.match.params.saveId])
	return <div></div>
}

export default withRouter(FinishedGame)

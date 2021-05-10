import React, { useState, useEffect } from 'react'
import ChapterService from '../../../services/chapter.service'
import CharacterSummary from '../../Character/CharacterSummary'

const chapterService = new ChapterService()

const findChapter = gameId => chapterService.getChaptersFromGame(gameId).then(res => res.data)

function SaveSummary({ save }) {
	const { character } = save
	const [, setChapter] = useState(null)
	const [chapterNumber, setChapterNumber] = useState(null)
	useEffect(() => {
		findChapter(save.game).then(allChapters => {
			setChapterNumber(allChapters.findIndex(elm => elm._id === save.currentChapter))
			setChapter(allChapters.find(elm => elm._id === save.currentChapter))
		})
	}, [])

	return (
		<div>
			<p>Cápitulo actual: {chapterNumber}</p>
			<CharacterSummary character={character} />
		</div>
	)
}

export default SaveSummary

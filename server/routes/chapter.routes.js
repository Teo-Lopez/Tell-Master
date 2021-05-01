const express = require('express')
const router = express.Router()
const Game = require('../models/Game.model')
const Chapter = require('../models/Chapters.model')

router.get('/', (req, res, next) => {
	const { chapterId } = req.query

	Chapter.getChapterAndChoices(chapterId)
		.then(chapterFound => res.json(chapterFound))
		.catch(err => console.log(err))
})

router.get('/fromGame', (req, res, next) => {
	const { gameId } = req.query

	Game.getChaptersOnly(gameId)
		.then(chaptersFound => res.json(chaptersFound))
		.catch(err => console.log(err))
})

router.post('/', (req, res) => {
	const { description, choices = [], gameId, title, last } = req.body
	const newChapter = { last, title, description, choices, gameId }
	Chapter.createChapter(newChapter, gameId)
		.then(createdChapter => res.json(createdChapter))
		.catch(err => res.json(err))
})

router.patch('/', (req, res) => {
	const { description, choices = [], chapterId, title, last } = req.body
	const newChapter = { last, title, description, choices }
	Chapter.findByIdAndUpdate(chapterId, newChapter, { new: true })
		.then(updatedChapter => res.json(updatedChapter))
		.catch(err => res.json(err))
})

router.put('/publish', (req, res) =>
	Chapter.findByIdAndUpdate(req.body.chapterId, { published: true }, { new: true })
		.then(updatedChapter => res.json(updatedChapter))
		.catch(err => res.json(err))
)

module.exports = router

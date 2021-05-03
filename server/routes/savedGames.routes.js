const express = require('express')
const router = express.Router()
const SavedGame = require('../models/SavedGame.model')
const { checkLoggedIn } = require('../middlewares')

router.get('/', (req, res) => {
	const { userId } = req.query

	SavedGame.getUserSaveFiles(userId)
		.then(saveFiles => res.json(saveFiles))
		.catch(err => res.status(401).json(err))
})

router.get('/full', (req, res) => {
	const { saveId } = req.query

	SavedGame.getFullSave(saveId)
		
		.then(savedGame => res.json(savedGame))
		.catch(err => res.status(401).json(err))
})

router.post('/', checkLoggedIn, (req, res) => {
	const { gameId, currentChapterId, characterId } = req.body
	const newSavedGame = {
		game: gameId,
		currentChapter: currentChapterId,
		character: characterId,
		user: req.session.user
	}
	SavedGame.createSaveFile(newSavedGame)
		.then(newSavedGame => res.json(newSavedGame))
		.catch(err => res.status(401).json(err))
})

router.patch('/', (req, res) => {
	const data = req.body

	SavedGame.findByIdAndUpdate(req.body.saveId, data)
		.lean()
		.then(updatedSavedGame => res.json(updatedSavedGame))
		.catch(err => res.status(401).json(err))
})

router.delete('/', (req, res) => {
	const { saveId } = req.body

	SavedGame.findByIdAndUpdate(savedGameId, { active: false }, { new: true })
		.then(deletedSavedGame => res.json(deletedSavedGame))
		.catch(err => res.json({ err }))
})

module.exports = router

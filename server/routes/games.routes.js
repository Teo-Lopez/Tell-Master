const express = require('express')
const router = express.Router()
const Game = require('../models/Game.model')

//Get one game
router.get('/', (req, res, next) => {
	const gameId = req.query.gameId
	Game.findById(gameId)
		.lean()
		.then(gameFound => res.json(gameFound))
		.catch(err => res.json({ err }))
})

router.get('/title', (req, res, next) => {
	const title = req.query.title
	if (!title) {
		res.json([])
		return
	}

	Game.find({ title: { $regex: `.*${title}.*`, $options: 'i' } })
		.lean()
		.then(gamesFound => res.json(gamesFound.slice(0, 5)))
		.catch(err => res.json({ err }))
})

//Get games administered
router.get('/owned', (req, res) =>
	Game.getByCreator(req.query.creatorId)
		.then(gameFound => res.json(gameFound))
		.catch(err => res.json({ err }))
)

router.get('/full', (req, res) => Game.getFullGameById(req.query.gameId).then(game => res.json(game)))

//Get last games created
router.get('/last', (req, res, next) =>
	Game.getLastTen(req.query.limit)
		.then(gamesFound => res.json(gamesFound))
		.catch(err => res.json({ err }))
)

//Create game
router.post('/', (req, res) => {
	const { creator, title, minLevel, description, simple } = req.body

	Game.create({ creator, title, minLevel, description, simple })
		.then(createdGame => res.json(createdGame))
		.catch(err => res.json({ err }))
})

router.delete('/', (req, res) => {
	Game.deleteGameAndChapters(req.body.gameId)
		.then(deletedChapters => res.json(deletedChapters))
		.catch(err => res.status(500).json(err))
})

module.exports = router

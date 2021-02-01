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
	!title && res.json([])
	Game.find({ title: { $regex: `.*${title}.*`, $options: 'i' } })
		.lean()
		.then(gamesFound => res.json(gamesFound.slice(0, 5)))
		.catch(err => res.json({ err }))
})

//Get games administered
router.get('/owned', (req, res) => {
	const creatorId = req.query.creatorId
	Game.find({ creator: creatorId })
		.lean()
		.then(gameFound => res.json(gameFound))
		.catch(err => res.json({ err }))
})

router.get('/full', (req, res) => {
	const gameId = req.query.gameId
	Game.getFullGameById(gameId).then(game => res.json(game))
})

//Get last games created
router.get('/last', (req, res, next) => {
	Game.getLastTen(req.query.limit)
		.then(gamesFound => res.json(gamesFound))
		.catch(err => res.json({ err }))
})

//Create game
router.post('/', (req, res) => {
	const { creator, title, minLevel, description, simple } = req.body

	Game.create({ creator, title, minLevel, description, simple })
		.then(createdGame => res.json(createdGame))
		.catch(err => res.json({ err }))
})

module.exports = router

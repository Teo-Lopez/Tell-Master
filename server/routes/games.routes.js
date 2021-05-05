const express = require('express')
const router = express.Router()
const Game = require('../models/Game.model')
const SavedGame = require('../models/SavedGame.model')

//Get one game
router.get('/', (req, res, next) => {
	const query = req.query.gameId ? { _id: req.query.gameId, active: true } : {}

	Game.find(query)
		.lean()
		.then(gameFound => res.json(gameFound))
		.catch(err => res.json({ err }))
})

//Create game
router.post('/', (req, res) => {
	const { creator, title, minLevel, description, simple, cover } = req.body

	Game.create({ creator, title, minLevel, description, simple, cover })
		.then(createdGame => res.json(createdGame))
		.catch(err => res.json({ err }))
})

router.patch('/', (req, res) => {
	const {
		gameId,
		creator,
		title,
		minLevel,
		description,
		simple,
		cover
	} = req.body

	Game.findByIdAndUpdate(
		gameId,
		{
			creator,
			title,
			minLevel,
			description,
			simple,
			cover
		},
		{ new: true }
	)
		.then(createdGame => res.json(createdGame))
		.catch(err => res.json({ err }))
})

router.delete('/', (req, res) => {
	const saveFilesPromise = SavedGame.updateMany(
		{ game: req.body.gameId },
		{ active: false },
		{ new: true }
	)
	const gamesPromise = Game.findByIdAndUpdate(
		req.body.gameId,
		{ active: false },
		{ new: true }
	)

	Promise.all([saveFilesPromise, gamesPromise])
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.get('/title', (req, res, next) => {
	const { title } = req.query

	if (!title) {
		res.json([])
		return
	}

	Game.find({ title: { $regex: `.*${title}.*`, $options: 'i' }, active: true })
		.lean()
		.then(gamesFound => res.json(gamesFound.slice(0, 5)))
		.catch(err => res.json({ err }))
})

router.get('/owned', (req, res) =>
	Game.find({ creator: req.query.creatorId, active: true })
		.then(gameFound => res.json(gameFound))
		.catch(err => res.json({ err }))
)

//TODO TEST WITH CHAPTERS
router.get('/full', (req, res) =>
	Game.getFullGameById(req.query.gameId).then(game => res.json(game))
)

router.get('/last', (req, res, next) =>
	Game.getLast(req.query.limit)
		.then(gamesFound => res.json(gamesFound))
		.catch(err => res.json({ err }))
)

router.patch('/publish', (req, res) =>
	Game.findByIdAndUpdate(req.body.gameId, { published: true }, { new: true })
		.then(updatedGame => res.json(updatedGame))
		.catch(err => res.json(err))
)

module.exports = router

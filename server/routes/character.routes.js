const express = require('express')
const router = express.Router()
const Game = require('../models/Game.model')
const Choice = require('../models/Choice.model')
const Chapter = require('../models/Chapters.model')
const Character = require('../models/Character.model')
const User = require('../models/User.model')
const { checkLoggedIn } = require('../middlewares')

router.get('/user', (req, res, next) => {
	const _id = req.query.chapterId || ''

	User.findById(_id)
		.lean()
		.select({ characters: true })
		.then(characters => {
			res.json({ characters })
		})
})

router.post('/', checkLoggedIn, (req, res) => {
	const { newCharacter } = req.body
	console.log(newCharacter)
	Character.createCharacter(newCharacter, req.session.user)
		.then(createdCharacter => {
			res.json(createdCharacter)
		})
		.catch(err => res.json(err))
})

router.post('/simple', (req, res) =>
	Character.createSimpleCharacter(req.user._id)
		.then(createdCharacter => res.json(createdCharacter))
		.catch(err => res.json({ err }))
)

router.patch('/', (req, res) => {
	const { charId, newCharacter } = req.body
	Character.findByIdAndUpdate(charId, newCharacter, { new: true })
		.then(char => res.json(char))
		.catch(err => res.status(401).json(err))
})

router.delete('/', (req, res) => {
	const { charId } = req.body

	Character.findByIdAndDelete(charId)
		.then(deletedCharacter => {
			res.json(deletedCharacter)
		})
		.catch(err => res.json({ err }))
})
module.exports = router

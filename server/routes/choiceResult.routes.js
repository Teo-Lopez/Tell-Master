const express = require('express')
const router = express.Router()
const Chapter = require('../models/Chapters.model')
const ChoiceResult = require('../models/ChoiceResult.model')

router.get('/', (req, res) => {
	const { chapterId } = req.query

	Chapter.findById(_id)
		.lean()
		.populate('choices')
		.select({ choices: true })
		// .sort({ choices: 1 }) TODO FIX ORDER
		.then(choicesFound => {
			res.json(choicesFound)
		})
})

router.post('/', (req, res) => {
	const { saveId, choiceId, characterId } = req.body

	ChoiceResult.makeChoice(choiceId, characterId)
		.then(createdChoice => {
			ChoiceResult.assignToSave(saveId, choiceId).then(_ =>
				res.json(createdChoice)
			)
		})
		.catch(err => res.json({ err }))
})

router.patch('/', (req, res) => {
	const newChoiceResult = ({ choiceResultId, choiceId, didSuccess } = req.body)

	ChoiceResult.findByIdAndUpdate(choiceResultId, newChoiceResult)
		.then(updatedChoice => res.json(updatedChoice))
		.catch(err => res.json({ err }))
})

module.exports = router

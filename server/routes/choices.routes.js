const express = require('express')
const router = express.Router()
const Choice = require('../models/Choice.model')
const Chapter = require('../models/Chapters.model')

router.get('/', (req, res, next) => {
	const { chapterId } = req.query

	Chapter.findById(chapterId)
		.lean()
		.populate('choices')
		.select({ choices: 1, _id: 0 })
		// .sort({ choices: 1 }) TODO FIX ORDER
		.then(choicesFound => res.json(choicesFound))
})

router.post('/', (req, res) => {
	const newChoice = ({
		description,
		trial,
		successTargetChapter,
		failureTargetChapter,
		pxGranted
	} = req.body)
	const { chapterId } = req.body

	Choice.createChapterChoice(newChoice, chapterId)
		.then(createdChoice => res.json(createdChoice))
		.catch(err => res.status(401).json(err))
})

router.patch('/', (req, res) => {
	const newChoice = ({
		description,
		trial,
		successTargetChapter,
		failureTargetChapter,
		pxGranted
	} = req.body)
	const { choiceId } = req.body

	Choice.findByIdAndUpdate(choiceId, newChoice, { new: true })
		.then(updatedChoice => res.json(updatedChoice))
		.catch(err => res.json({ err }))
})

router.delete('/', (req, res) => {
	const { choiceId } = req.body

	Choice.findByIdAndUpdate(choiceId, { active: false }, { new: true })
		.then(deletedChoice => res.json(deletedChoice))
		.catch(err => res.json({ err }))
})
module.exports = router

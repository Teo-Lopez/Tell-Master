const mongoose = require('mongoose')
const Choice = require('./Choice.model')
const Character = require('./Character.model')
const SavedGame = require('./SavedGame.model')
const Schema = mongoose.Schema

const choiceResultSchema = new Schema(
	{
		choice: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Choice',
			required: true
		},
		didSuccess: Boolean
	},
	{ timestamps: true }
)

choiceResultSchema.statics.assignToSave = function (saveId, choiceId) {
	return SavedGame.findById(saveId, { $push: { choicesTree: choiceId } })
}

choiceResultSchema.statics.makeChoice = function (choiceId, characterId) {
	const promises = [Character.findById(characterId), Choice.findById(choiceId)]

	return Promise.all(promises)
		.then(([character, choice]) => {
			const choiceResult = {
				choice: choice._id,
				didSuccess: character.roll(choice.trial)
			}
			return this.create(choiceResult)
		})
		.then(doc => doc)
		.catch(err => console.log(err))
}

const ChoiceResult = mongoose.model('ChoiceResult', choiceResultSchema)

//TODO ¿Añadir metodo para retornar targetChapter, populado en choice?

module.exports = ChoiceResult

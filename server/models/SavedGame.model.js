const mongoose = require('mongoose')
const User = require('./User.model')
const Schema = mongoose.Schema
const Character = require('./Character.model')

const savedGameSchema = new Schema(
	{
		active: { type: Boolean, default: true, required: true },
		game: { type: mongoose.SchemaTypes.ObjectId, ref: 'Game', required: true },
		currentChapter: { type: mongoose.SchemaTypes.ObjectId, ref: 'Chapter' },
		choicesTree: {
			type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'ChoiceResult' }],
			default: []
		},
		character: { type: mongoose.SchemaTypes.ObjectId, ref: 'Character' },
		isFinished: { type: Boolean, required: true, default: false },
		user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true }
	},
	{ timestamps: true }
)

savedGameSchema.statics.createSaveFile = function (data) {
	console.log(data)
	return this.create(data).then(doc => {
		return User.findByIdAndUpdate(
			doc.user,
			{ $push: { savedGames: doc._id } },
			{ new: true }
		).then(_ => doc)
	})
}

savedGameSchema.statics.getUserSaveFiles = function (userId, gameId) {
	const query = {}
	if (userId) query.user = userId
	if (gameId) query.game = gameId

	return this.find(query).populate('character')
}

savedGameSchema.statics.getFullSave = function (saveId) {
	return this.findById(saveId)
		.populate('character game')
		.populate({
			path: 'choicesTree',
			populate: {
				path: 'choice'
			}
		})
		.populate({
			path: 'currentChapter',
			populate: {
				path: 'choices'
			}
		})
}

const SavedGame = mongoose.model('SavedGame', savedGameSchema)

module.exports = SavedGame

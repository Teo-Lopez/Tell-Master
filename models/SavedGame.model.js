const mongoose = require('mongoose')
const Schema = mongoose.Schema

const savedGameSchema = new Schema(
	{
		active: { type: Boolean, default: true },
		game: { type: mongoose.SchemaTypes.ObjectId, ref: 'Game' },
		currentChapter: { type: mongoose.SchemaTypes.ObjectId, ref: 'Chapter' },
		choicesTree: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'CharacterChoice' }],
		character: { type: mongoose.SchemaTypes.ObjectId, ref: 'Character' },
		finished: { type: Boolean, required: true, default: false },
	},
	{ timestamps: true }
)

savedGameSchema.statics.getUserSave = function (query) {
	return mongoose
		.model('User')
		.findById(query)
		.populate({
			path: 'savedGames',
			populate: {
				path: 'character',
			},
		})
		.select({ savedGames: true })
}

const SavedGame = mongoose.model('SavedGame', savedGameSchema)

module.exports = SavedGame

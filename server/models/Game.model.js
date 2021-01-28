const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema(
	{
		creator: mongoose.SchemaTypes.ObjectId,
		title: { type: String, required: true, unique: true },
		minLevel: { type: Number, required: true },
		description: { type: String, required: true },
		chapters: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Chapter' }], default: [] },
		simple: { type: Boolean, default: false },
	},
	{ timestamps: true }
)
gameSchema.statics.getFullGameById = function () {
	return this.findById(gameId)
		.populate({
			path: 'chapters',
			populate: { path: 'choices' },
		})
		.then(game => game)
		.catch(err => err)
}

gameSchema.statics.getChaptersOnly = function (gameId) {
	return this.findById(gameId)
		.lean()
		.populate('chapters')
		.select({ chapters: true })
		.then(chaptersFound => chaptersFound)
		.catch(err => err)
}

gameSchema.statics.getLastTen = function (limit = 10) {
	return this.find({})
		.then(gamesFound => {
			gamesFound.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
			const lastTen = gamesFound.slice(0, limit)
			console.log(lastTen)
			return { gamesFound: lastTen }
		})
		.catch(err => console.log(err))
}

const Game = mongoose.model('Game', gameSchema)

module.exports = Game

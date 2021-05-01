const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema(
	{
		active: { type: Boolean, default: true },
		creator: { type: mongoose.SchemaTypes.ObjectId, required: true },
		title: { type: String, required: true, unique: true },
		minLevel: { type: Number, required: true, default: 0 },
		description: { type: String, required: true },
		chapters: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Chapter' }], default: [] },
		simple: { type: Boolean, default: true },
		published: { type: Boolean, default: false }
	},
	{ timestamps: true }
)

gameSchema.statics.getFullGameById = function (_id) {
	return this.findOne({ _id, active: true })
		.populate({
			path: 'chapters',
			populate: { path: 'choices' }
		})
		.then(game => game)
		.catch(err => err)
}

gameSchema.statics.getChaptersOnly = function (_id) {
	return this.findOne({ _id, active: true })
		.lean()
		.populate('chapters')
		.select({ chapters: true, _id: false })
		.then(game => game.chapters)
		.catch(err => err)
}

gameSchema.statics.getLast = function (limit = 10) {
	//TODO mejorar este sort
	return this.find({ active: true, published: true })
		.then(gamesFound => {
			gamesFound.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
			const lastTen = gamesFound.slice(0, limit)
			return lastTen
		})
		.catch(err => console.log(err))
}

gameSchema.statics.disableGame = function (_id) {
	return this.findByIdAndUpdate(_id, { active: false })
		.then(disabledGame => {
			const chapterPromises = disabledGame.chapters.map(chId => mongoose.model('Chapter').disableChapter(chId))
			chapterPromises.push()
			Promise.all()
		})
		.then(allDisabledChapters => allDisabledChapters)
		.catch(err => err)
}

const Game = mongoose.model('Game', gameSchema)

module.exports = Game

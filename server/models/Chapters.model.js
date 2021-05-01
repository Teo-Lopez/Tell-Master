const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Game = require('../models/Game.model')

const chapterSchema = new Schema(
	{
		active: { type: Boolean, default: true },
		title: { type: String, required: true },
		description: String,
		choices: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Choice' }], default: [] },
		published: { type: Boolean, default: false },
		last: Boolean
	},
	{ timestamps: true }
)

chapterSchema.statics.createChapter = function (newChapter, gameId) {
	return Game.findById(gameId).then(game => {
		if (!game) throw new Error('No valid ID')

		//TODO better error handling
		return this.create(newChapter).then(createdChapter =>
			Game.findByIdAndUpdate(gameId, { $push: { chapters: createdChapter._id } }, { new: true }).then(updatedGame => {
				return { createdChapter, updatedGame }
			})
		)
	})
}
chapterSchema.statics.getChapterAndChoices = function (chapterId) {
	return Chapter.findOne({ _id: chapterId, active: true })
		.lean()
		.populate('choices')
		.then(chapterFound => chapterFound)
}

chapterSchema.statics.disableChapter = function (chapterId) {
	return this.findByIdAndUpdate(chapterId, { active: false })
}
const Chapter = mongoose.model('Chapter', chapterSchema)
module.exports = Chapter

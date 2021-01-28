const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Game = require('../models/Game.model')

const chapterSchema = new Schema(
	{
		title: { type: String, required: true },
		description: String,
		choices: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Choice' }],
		last: Boolean,
	},
	{ timestamps: true }
)

chapterSchema.statics.createChapter = function (newChapter, gameId) {
	return this.create(newChapter).then(createdChapter =>
		Game.updateOne({ _id: gameId }, { $push: { chapters: createdChapter } }).then(updatedGame => createdChapter)
	)
}
chapterSchema.statics.getChapterAndChoices = function (chapterId) {
	return Chapter.findById(chapterId)
		.lean()
		.populate('choices')
		.then(chapterFound => chapterFound)
}
const Chapter = mongoose.model('Chapter', chapterSchema)
module.exports = Chapter

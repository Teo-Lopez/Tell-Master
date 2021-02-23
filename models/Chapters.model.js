const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Game = require('../models/Game.model')

const chapterSchema = new Schema(
	{
		active: { type: Boolean, default: true },
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

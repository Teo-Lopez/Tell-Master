const mongoose = require('mongoose')
const Chapter = require('./Chapters.model')
const Schema = mongoose.Schema

const choiceSchema = new Schema(
	{
		active: { type: Boolean, default: true },
		description: { type: String, required: true },
		trial: {
			difficulty: { type: Number, required: true },
			characteristic: {
				type: String,
				enum: ['str', 'des', 'agi', 'con', 'int', 'wis', 'char'],
				required: true
			}
		},
		successTargetChapter: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Chapter',
			required: true
		},
		failureTargetChapter: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Chapter',
			required: true
		},
		pxGranted: Number
	},
	{ timestamps: true }
)

choiceSchema.statics.createChapterChoice = function (data, chapterId) {
	return this.create(data).then(doc => {
		return Chapter.findByIdAndUpdate(chapterId, {
			$push: { choices: doc._id }
		}).then(_ => doc)
	})
}

const Choice = mongoose.model('Choice', choiceSchema)

module.exports = Choice

const mongoose = require('mongoose')
const User = require('./User.model')
const Schema = mongoose.Schema

const characterSchema = new Schema(
	{
		name: String,
		level: { type: Number, default: 0 },
		px: { type: Number, default: 0 },
		stats: {
			hp: { type: Number },
			maxhp: { type: Number },
			str: Number,
			des: Number,
			agi: Number,
			con: Number,
			int: Number,
			wis: Number,
			char: Number
		},
		active: { type: Boolean, default: true }
	},
	{ timestamps: true }
)

characterSchema.pre('save', function (next) {
	console.log(this.stats)
	this.stats.maxhp = this.stats.hp
	next()
})

characterSchema.methods.bonus = function (stat) {
	return Math.floor(stat / 2 - 5)
}

characterSchema.methods.roll = function (stat) {
	return parseInt(Math.floor(Math.random()) * 20 + this.bonus(stat))
}

characterSchema.statics.createCharacter = function (newCharacter, userId) {
	return this.create(newCharacter).then(newChar => {
		return User.findByIdAndUpdate(userId, { $push: { characters: newChar._id } }).then(_ => newChar)
	})
}
characterSchema.statics.createSimpleCharacter = function (userId) {
	const character = {
		name: 'Simple Game',
		hp: 1000,
		str: 100,
		des: 100,
		agi: 100,
		con: 100,
		int: 100,
		wis: 100,
		char: 100,
		maxhp: 1000,
		level: 1,
		px: 0
	}

	return this.create(character)
		.then(char => {
			mongoose.model('User').findByIdAndUpdate(userId, { $push: { characters: char._id } }, { new: true })
			return char
		})

		.catch(err => res.json({ err }))
}

const Character = mongoose.model('Character', characterSchema)

//TODO Añadir método para levelUp

module.exports = Character

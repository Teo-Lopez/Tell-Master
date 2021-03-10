const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema(
	{
		name: String,
		level: Number,
		px: Number,
		maxhp: Number,
		hp: Number,
		str: Number,
		des: Number,
		agi: Number,
		con: Number,
		int: Number,
		wis: Number,
		char: Number,
	},
	{ timestamps: true }
)

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
		px: 0,
	}

	return this.create(character)
		.then(char => {
			mongoose.model('User').findByIdAndUpdate(userId, { $push: { characters: char._id } }, { new: true })
			return char
		})

		.catch(err => res.json({ err }))
}
const Character = mongoose.model('Character', characterSchema)

//TO-DO Añadir método para levelUp

module.exports = Character

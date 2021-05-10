const mongoose = require('mongoose')
const { toLower } = require('../utils')
const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		username: { type: String, required: true, set: name => toLower(name) },
		email: { type: String, unique: true, required: true, set: mail => toLower(mail) },
		password: { type: String, required: true },
		savedGames: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'SavedGame' }], default: [] },
		characters: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Character' }], default: [] }
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User

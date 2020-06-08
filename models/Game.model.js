const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: String,
  minLevel: Number,
  description: String,
  chapters: [mongoose.SchemaTypes.ObjectId],
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;

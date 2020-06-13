const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    creator: mongoose.SchemaTypes.ObjectId,
    title: String,
    minLevel: Number,
    description: String,
    chapters: [mongoose.SchemaTypes.ObjectId],
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;

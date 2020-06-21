const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    creator: mongoose.SchemaTypes.ObjectId,
    title: { type: String, required: true, unique: true },
    minLevel: { type: Number, required: true },
    description: { type: String, required: true },
    chapters: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Chapter" }], default: [] },
    simple: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;

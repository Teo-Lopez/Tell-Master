const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedGameSchema = new Schema(
  {
    gameId: { type: mongoose.SchemaTypes.ObjectId, ref: "Game" },
    currentChapter: { type: mongoose.SchemaTypes.ObjectId, ref: "Chapter" },
    choicesTree: [{ type: mongoose.SchemaTypes.ObjectId, ref: "CharacterChoice" }],
    character: { type: mongoose.SchemaTypes.ObjectId, ref: "Character" },
    finished: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const SavedGame = mongoose.model("SavedGame", savedGameSchema);

module.exports = SavedGame;

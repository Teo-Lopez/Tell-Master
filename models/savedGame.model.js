const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedGameSchema = new Schema(
  {
    gameID: mongoose.SchemaTypes.ObjectId,
    currentChapter: mongoose.SchemaTypes.ObjectId,
    choicesTree: [mongoose.SchemaTypes.ObjectId],
    character: mongoose.SchemaTypes.ObjectId,
  },
  { timestamps: true }
);

const SavedGame = mongoose.model("SavedGame", savedGameSchema);

module.exports = SavedGame;

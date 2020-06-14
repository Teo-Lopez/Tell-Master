const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterChoiceSchema = new Schema(
  {
    choice: { type: mongoose.SchemaTypes.ObjectId, ref: "Choice" },
    didSuccess: Boolean,
    leveledUp: Boolean,
  },
  { timestamps: true }
);

const CharacterChoice = mongoose.model("CharacterChoice", characterChoiceSchema);

//TO-DO Añadir metodo para retornar targetChapter, populado en choice

module.exports = CharacterChoice;

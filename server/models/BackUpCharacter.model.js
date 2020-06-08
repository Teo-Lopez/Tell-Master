const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const backUpCharacterSchema = new Schema({
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
});

const BackUpCharacter = mongoose.model("BackUpCharacter", backUpCharacterSchema);

module.exports = BackUpCharacter;

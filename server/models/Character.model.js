const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
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

const Character = mongoose.model("Character", characterSchema);

//TO-DO Añadir método para levelUp

module.exports = Character;

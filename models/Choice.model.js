const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choiceSchema = new Schema({
  description: String,
  trial: {
    difficulty: Number,
    characteristic: {type: String, enum: ["str, des, agi, con, int, wis, char"]},
  },
  successTargetChapter: mongoose.SchemaTypes.ObjectId,
  failureTargetChapter: mongoose.SchemaTypes.ObjectId,
  pxGranted: Number
});

const Choice = mongoose.model("Choice", choiceSchema);

module.exports = Choice;

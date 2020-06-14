const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choiceSchema = new Schema(
  {
    description: String,
    trial: {
      difficulty: Number,
      characteristic: { type: String, enum: ["str", "des", "agi", "con", "int", "wis", "char"] },
    },
    successTargetChapter: { type: mongoose.SchemaTypes.ObjectId, ref: "Chapter" },
    failureTargetChapter: { type: mongoose.SchemaTypes.ObjectId, ref: "Chapter" },
    pxGranted: Number,
  },
  { timestamps: true }
);

const Choice = mongoose.model("Choice", choiceSchema);

module.exports = Choice;

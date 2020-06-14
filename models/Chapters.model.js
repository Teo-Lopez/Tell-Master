const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chapterSchema = new Schema(
  {
    description: String,
    choices: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Choice" }],
  },
  { timestamps: true }
);

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;

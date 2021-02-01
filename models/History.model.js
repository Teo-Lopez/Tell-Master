const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema(
  {
    // [{ type: mongoose.SchemaTypes.ObjectId, ref: "Choice" }]
  },
  { timestamps: true }
);

const History = mongoose.model("History", historySchema);

//TO-DO Añadir método para levelUp

module.exports = history;

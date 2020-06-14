const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    savedGames: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "SavedGame" }], default: [] },
    characters: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Character" }], default: [] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

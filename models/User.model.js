const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  savedGames: [mongoose.SchemaTypes.ObjectId],
  characters: [mongoose.SchemaTypes.ObjectId],
});

const User = mongoose.model("User", userSchema);

module.exports = User;

require("dotenv").config();
const express = require("express");
const app = express();
require("./configs/mongoose.config");
require("./configs/debug.config");
require("./configs/middleware.config")(app);
require("./configs/view_engine.config")(app);
require("./configs/locals.config")(app);
require("./configs/session.config")(app);

const index = require("./routes/index");
app.use("/", index);
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/games", require("./routes/games.routes"));
app.use("/api/chapters", require("./routes/chapter.routes"));
app.use("/api/choices", require("./routes/choices.routes"));
app.use("/api/savedGames", require("./routes/savedGames.routes"));

app.use((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
module.exports = app;

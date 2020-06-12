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

module.exports = app;

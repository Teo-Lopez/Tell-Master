require("dotenv").config();
const express = require("express");
const app = express();
require("./configs/mongoose.config");
require("./configs/debug.config");
require("./configs/middleware.config")(app);
require("./configs/view_engine.config")(app);
require("./configs/locals.config")(app);

const index = require("./routes/index");
app.use("/", index);

module.exports = app;

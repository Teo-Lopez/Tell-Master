const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");

const middlewares = (app) => {
  // Middleware Setup
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(
    require("node-sass-middleware")({
      src: path.join(__dirname, "../public"),
      dest: path.join(__dirname, "../public"),
      sourceMap: true,
    })
  );
};

module.exports = middlewares;

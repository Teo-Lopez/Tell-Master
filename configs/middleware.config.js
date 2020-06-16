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

  const cors = require("cors");
  const corsOptions = {
    origin: ["http://localhost:3000", "https://tellmaster.herokuapp.com/"],
    credentials: true,
  };
  app.use(cors(corsOptions));
};

module.exports = middlewares;

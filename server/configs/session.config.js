const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("passport");
require("./passport.config");

module.exports = (app) => {
  // Enable authentication using session + passport
  app.use(
    session({
      secret: "carmen de mairena",
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false, maxAge: 60000 },
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};

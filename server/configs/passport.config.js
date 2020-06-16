const User = require("../models/User.model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = require("passport");

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession)
    .lean()
    .populate("characters")
    .populate("savedGames")
    .then((userDocument) => {
      cb(null, userDocument);
    })
    .catch((err) => cb(err));
});

passport.use(
  new LocalStrategy((username, password, next) => {
    User.findOne({ username })
      .lean()
      .populate("characters")
      .then((foundUser) => {
        if (!foundUser) {
          next(null, false, { message: "Usuario no registrado." });
          return;
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
          next(null, false, { message: "Contraseña incorrecta." });
          return;
        }

        next(null, foundUser);
      })
      .catch((err) => next(err));
  })
);

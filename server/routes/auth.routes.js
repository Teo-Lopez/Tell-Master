const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
//api/auth
router.get("/", (req, res, next) => {
  res.json({ user: { name: "whatever" } });
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  //TO-DO PERSISTENCIA EN BACKEND
  User.findOne({ email })
    .then((foundUser) => {
      if (foundUser === null) res.json({ error: "El email no existe." });
      else {
        bcrypt
          .compare(password, foundUser.password)
          .then((isPasswordCorrect) => {
            if (isPasswordCorrect) {
              res.json(foundUser);
            } else {
              res.json({ error: "La contraseña es erronea." });
            }
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => res.json(err));
});

router.post("/signup", (req, res) => {
  const { username, email, password, savedGames, characters } = req.body;
  const salt = 10;

  User.findOne({ email }).then((foundUser) => {
    if (foundUser) res.json({ error: "Ya hay un usuario registrado con este email." });
    else {
      bcrypt.hash(password, salt).then((hash) => {
        User.create({ username, email, password: hash, savedGames, characters })
          .then((userCreated) => {
            res.json(userCreated);
          })
          .catch((err) => res.json(err));
      });
    }
  });
});

module.exports = router;

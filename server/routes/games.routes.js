const express = require("express");
const router = express.Router();
const Game = require("../models/Game.model");

router.get("/", (req, res, next) => {
  const today = new Date();
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const limit = parseInt(req.query.limit) || 10;

  Game.find({ createdAt: { $gte: lastWeek, $lt: today } })
    .limit(limit)
    .then((gamesFound) => res.json({ gamesFound }))
    .catch((err) => res.json({ err }));
  //TO-DO Employ req.query.limit for DB search.
});

router.post("/", (req, res) => {
  const { creator, title, minLevel, description } = req.body;
  Game.create({ creator, title, minLevel, description })
    .then((createdGame) => res.json(createdGame))
    .catch((err) => res.json({ err }));
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Game = require("../models/Game.model");

//Get one game
router.get("/", (req, res, next) => {
  const gameId = req.query.gameId;
  Game.findById(gameId)
    .lean()
    .then((gameFound) => res.json(gameFound))
    .catch((err) => res.json({ err }));
});

//Get games administered
router.get("/owned", (req, res) => {
  const creatorId = req.query.creatorId;
  Game.find({ creator: creatorId })
    .lean()
    .then((gameFound) => res.json(gameFound))
    .catch((err) => res.json({ err }));
});

//Get last games created
router.get("/last", (req, res, next) => {
  const today = new Date();
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const limit = parseInt(req.query.limit) || 10;

  Game.find({ createdAt: { $gte: lastWeek, $lt: today } })
    .limit(limit)
    .sort({ createdAt: -1 })
    .then((gamesFound) => res.json({ gamesFound }))
    .catch((err) => res.json({ err }));
  //TO-DO Employ req.query.limit for DB search.
});

//Create game
router.post("/", (req, res) => {
  const { creator, title, minLevel, description } = req.body;
  Game.create({ creator, title, minLevel, description })
    .then((createdGame) => res.json(createdGame))
    .catch((err) => res.json({ err }));
});

module.exports = router;

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

router.get("/title", (req, res, next) => {
  const title = req.query.title;
  if (!title) res.json([]);
  Game.find({ title: { $regex: `.*${title}.*`, $options: "i" } })
    .lean()
    .then((gamesFound) => res.json(gamesFound.slice(0, 5)))
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

router.get("/full", (req, res) => {
  Game.findById(req.query.gameId)
    .populate({
      path: "chapters",
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: "choices" },
    })
    .then((game) => {
      res.json(game);
    });
});

//Get last games created
router.get("/last", (req, res, next) => {
  const today = new Date();
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const limit = parseInt(req.query.limit) || 10;

  Game.find({})
    .then((gamesFound) => {
      const games = gamesFound.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1));
      res.json({ gamesFound: games.slice(0, limit) });
    })
    .catch((err) => res.json({ err }));
  //TO-DO Employ req.query.limit for DB search.
});

//Create game
router.post("/", (req, res) => {
  const { creator, title, minLevel, description, simple } = req.body;

  Game.create({ creator, title, minLevel, description, simple })
    .then((createdGame) => res.json(createdGame))
    .catch((err) => res.json({ err }));
});

module.exports = router;

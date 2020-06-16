const express = require("express");
const router = express.Router();
const Game = require("../models/Game.model");
const SavedGame = require("../models/SavedGame.model");
const Choice = require("../models/Choice.model");
const Chapter = require("../models/Chapters.model");
const User = require("../models/User.model");

router.get("/user", (req, res, next) => {
  const _id = req.query.userId || "";

  User.findById({ _id })
    .populate("savedGames")
    .select({ savedGames: true })
    .then((savedGamesFound) => {
      console.log(savedGamesFound);
      res.json(savedGamesFound);
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { gameId, currentChapter, character, userId } = req.body;
  const newSavedGame = {
    gameId,
    currentChapter,
    character,
  };

  SavedGame.create(newSavedGame)
    .then((newSavedGame) => {
      User.findByIdAndUpdate(userId, { $push: { savedGames: newSavedGame } }).then((updatedUser) => {
        res.json(newSavedGame);
      });
    })
    .catch((err) => res.json({ err }));
});

router.post("/assign", (req, res) => {
  console.log(req.body.saveId);
  const { userId, saveId } = req.body;

  User.findByIdAndUpdate(userId, { $push: { savedGames: saveId } }, { new: true })
    .lean()
    .populate("savedGames")
    .populate("characters")
    .then((updatedUser) => {
      console.log(updatedUser);
      res.json(updatedUser);
    })
    .catch((err) => console.log(err));
});

router.patch("/", (req, res) => {
  const { savedGameId, gameId, currentChapter, character } = req.body;
  const newSavedGame = {
    gameId,
    currentChapter,
    character,
    choicesTree,
  };

  SavedGame.updateOne({ _id: savedGameId }, newSavedGame)
    .lean()
    .then((updatedSavedGame) => {
      res.json(updatedSavedGame);
    })
    .catch((err) => res.json({ err }));
});

router.delete("/", (req, res) => {
  const { savedGameId } = req.body;

  SavedGame.findByIdAndDelete(savedGameId)
    .then((deletedSavedGame) => {
      res.json(deletedSavedGame);
    })
    .catch((err) => res.json({ err }));
});

module.exports = router;

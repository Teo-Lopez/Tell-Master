const express = require("express");
const router = express.Router();
const Game = require("../models/Game.model");
const SavedGame = require("../models/SavedGame.model");
const Choice = require("../models/Choice.model");
const Chapter = require("../models/Chapters.model");
const User = require("../models/User.model");
const Character = require("../models/Character.model");

router.get("/user", (req, res, next) => {
  const _id = req.query.userId || "";
  const gameId = req.query.gameId;
  const query = { _id };

  User.findById(query)
    .populate({
      path: "savedGames",
      populate: {
        path: "character",
      },
    })
    .select({ savedGames: true })
    .then((user) => {
      const savedGamesFound = user.savedGames.filter((save) => save.gameId == gameId);
      res.json(savedGamesFound);
    });
});

router.get("/full", (req, res, next) => {
  const _id = req.query.saveId;

  SavedGame.findById(_id)
    .populate("character")
    .populate({
      path: "currentChapter",
      populate: {
        path: "choices",
      },
    })
    .select({ savedGames: true })
    .then((savedGame) => {
      res.json(savedGame);
    });
});

router.post("/", (req, res) => {
  console.log("comienza a crear");
  const { gameId, currentChapter, character, userId } = req.body;
  const newSavedGame = {
    gameId,
    currentChapter,
    character,
  };

  SavedGame.create(newSavedGame)
    .then((newSavedGame) => {
      User.findByIdAndUpdate(userId, { $push: { savedGames: newSavedGame } }).then((updatedUser) => {
        SavedGame.populate(newSavedGame, { path: "character" }).then((populatedSave) => {
          console.log("-------------------------", populatedSave, "caramelo");

          res.json(populatedSave);
        });
      });
    })
    .catch((err) => res.json({ err }));
});

router.post("/assign", (req, res) => {
  const { userId, saveId } = req.body;

  User.findByIdAndUpdate(userId, { $push: { savedGames: saveId } }, { new: true })
    .lean()
    .populate("savedGames")
    .populate("characters")
    .then((updatedUser) => {
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

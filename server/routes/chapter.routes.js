const express = require("express");
const router = express.Router();
const Game = require("../models/Game.model");
const Chapter = require("../models/Chapters.model");

router.get("/", (req, res, next) => {
  const { gameId } = req.query;

  Game.findById(gameId)
    .lean()
    .populate("chapters")
    .select({ chapters: true })
    .then((chaptersFound) => {
      console.log(chaptersFound);
      res.json(chaptersFound);
    });
});

router.post("/", (req, res) => {
  const { description, choices, gameId } = req.body;
  const newChapter = { description, choices: Array.isArray(choices) && choices.length > 0 ? choices : undefined, gameId };
  Chapter.create(newChapter)
    .then((createdChapter) => {
      Game.updateOne({ _id: gameId }, { $push: { chapters: createdChapter } }).then((updatedGame) => {
        console.log(updatedGame);
        res.json(createdChapter);
      });
    })
    .catch((err) => res.json({ err }));
});



module.exports = router;

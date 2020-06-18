const express = require("express");
const router = express.Router();
const Game = require("../models/Game.model");
const Chapter = require("../models/Chapters.model");

router.get("/", (req, res, next) => {
  const { chapterId } = req.query;

  Chapter.findById(chapterId)
    .lean()
    .populate("choices")
    .then((chapterFound) => {
      console.log(chapterFound);
      res.json(chapterFound);
    })
    .catch((err) => console.log(err));
});

router.get("/fromGame", (req, res, next) => {
  const { gameId } = req.query;

  Game.findById(gameId)
    .lean()
    .populate("chapters")
    .select({ chapters: true })
    .then((chaptersFound) => {
      console.log(chaptersFound);
      res.json(chaptersFound);
    })
    .catch((err) => console.log(err));
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

router.patch("/", (req, res) => {
  const { description, choices, _id } = req.body;
  const newChapter = { description, choices: Array.isArray(choices) && choices.length > 0 ? choices : undefined };
  Chapter.findByIdAndUpdate(_id, newChapter, { new: true })
    .then((updatedChapter) => {
      res.json(updatedChapter);
    })
    .catch((err) => res.json({ err }));
});

module.exports = router;

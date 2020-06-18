const express = require("express");
const router = express.Router();
const Game = require("../models/Game.model");
const Choice = require("../models/Choice.model");
const Chapter = require("../models/Chapters.model");

router.get("/", (req, res, next) => {
  const _id = req.query.chapterId || "";

  Chapter.findById(_id)
    .lean()
    .populate("choices")
    .select({ choices: true })
    // .sort({ choices: 1 }) TO-DO FIX ORDER
    .then((choicesFound) => {
      console.log(choicesFound);
      res.json(choicesFound);
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { description, trial, successTargetChapter, failureTargetChapter, pxGranted } = req.body;
  const newChoice = {
    description,
    trial,
    successTargetChapter: successTargetChapter || undefined,
    failureTargetChapter: failureTargetChapter || undefined,
    pxGranted,
  };

  Choice.create(newChoice)
    .then((createdChoice) => {
      res.json(createdChoice);
    })
    .catch((err) => res.json({ err }));
});

router.patch("/", (req, res) => {
  console.log("-----------------------------------", req.body);
  const { _id, chapterId, description, trial, successTargetChapter, failureTargetChapter, pxGranted } = req.body;
  const newChoice = {
    chapterId,
    description,
    trial,
    successTargetChapter: successTargetChapter || undefined,
    failureTargetChapter: failureTargetChapter || undefined,
    pxGranted,
  };

  Choice.findByIdAndUpdate(_id, newChoice)
    .then((updatedChoice) => {
      res.json(updatedChoice);
    })
    .catch((err) => res.json({ err }));
});

router.delete("/", (req, res) => {
  const { choiceId } = req.body;

  Choice.findByIdAndDelete(choiceId)
    .then((deletedChoice) => {
      res.json(deletedChoice);
    })
    .catch((err) => res.json({ err }));
});
module.exports = router;

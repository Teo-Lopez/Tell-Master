const express = require("express");
const router = express.Router();
const Game = require("../models/Game.model");
const Choice = require("../models/Choice.model");
const Chapter = require("../models/Chapters.model");
const CharacterChoices = require("../models/CharacterChoices.model");
const Character = require("../models/Character.model");
const SavedGame = require("../models/SavedGame.model");

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

router.post("/makeChoice", (req, res) => {
  const { saveId, choiceId, characterId } = req.body;
  console.log(req.body);
  //buscar choice
  Choice.findById(choiceId).then((choiceFound) => {
    //buscar character
    Character.findById(characterId).then((characterFound) => {
      //tirada
      const dif = choiceFound.trial.difficulty;
      const char = choiceFound.trial.characteristic;

      function calcBonus(number) {
        return number / 2 - 5;
      }

      function rollDice(dif, char, character) {
        const playerChar = character[char];
        const roll = parseInt(Math.random() * 20);
        const rollResult = parseInt(roll + calcBonus(playerChar));
        if (roll >= dif) return { roll, number: rollResult, result: true };
        else return { roll, number: rollResult, result: false };
      }

      const roll = rollDice(dif, char, characterFound);
      //TO-DO LEVEL UP
      CharacterChoices.create({ choice: choiceFound._id, didSuccess: roll.result, leveledUp: false })
        .then((characterChoiceCreated) => {
          return SavedGame.findByIdAndUpdate(saveId, {
            currentChapter: roll.result ? choiceFound.successTargetChapter : choiceFound.failureTargetChapter,
            $push: {
              choicesTree: characterChoiceCreated,
            },
          });
        })
        .then((newSavedGame) => {
          //TO-DO
          if (roll.result === true) res.json({ roll: roll.roll, rollResult: roll.number, chapterTarget: newSavedGame._id });
          else res.json({ roll: roll.roll, rollResult: roll.number, chapterTarget: newSavedGame._id });
        })
        .catch((err) => console.log(err));
    });
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
  const { choiceId, chapterId, description, trial, successTargetChapter, failureTargetChapter, pxGranted } = req.body;
  const newChoice = {
    chapterId,
    description,
    trial,
    successTargetChapter: successTargetChapter || undefined,
    failureTargetChapter: failureTargetChapter || undefined,
    pxGranted,
  };

  Choice.updateOne({ _id: choiceId }, newChoice)
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

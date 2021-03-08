const express = require("express")
const router = express.Router()
const Game = require("../models/Game.model")
const Choice = require("../models/Choice.model")
const Chapter = require("../models/Chapters.model")
const Character = require("../models/Character.model")
const User = require("../models/User.model")

router.get("/user", (req, res, next) => {
  const _id = req.query.chapterId || ""

  User.findById(_id)
    .lean()
    .select({ characters: true })
    .then((characters) => {
      res.json({ characters })
    })
})

router.post("/", (req, res) => {
  const newCharacter = req.body.character
  newCharacter.maxhp = newCharacter.hp
  newCharacter.level = 1
  newCharacter.px = 0

  Character.create(newCharacter)
    .then((createdCharacter) => {
      res.json(createdCharacter)
    })
    .catch((err) => res.json({ err }))
})

router.post("/simple", (req, res) => Character.createSimpleCharacter()
  .then((createdCharacter) => res.json(createdCharacter))
  .catch((err) => res.json({ err }))
)

router.post("/assign", (req, res) => {
  const { userId, characterId } = req.body

  User.findByIdAndUpdate(userId, { $push: { characters: characterId } }, { new: true })
    .lean()
    .populate("characters")
    .populate("savedGames")
    .then((updatedUser) => {
      res.json(updatedUser)
    })
    .catch((err) => res.json({ err }))
})

router.patch("/", (req, res) => {
  //TO-DO UPDATE Char
})

router.delete("/", (req, res) => {
  const { charId } = req.body

  Character.findByIdAndDelete(charId)
    .then((deletedCharacter) => {
      res.json(deletedCharacter)
    })
    .catch((err) => res.json({ err }))
})
module.exports = router

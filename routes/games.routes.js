const express = require("express");
const router = express.Router();

router.get("/last10", (req, res, next) => {
  res.json({ algo: ["hey", 5] });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  
  res.json({ algo: ["hey", 5] });
  //TO-DO Employ req.query.limit for DB search.
});

module.exports = router;

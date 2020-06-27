var express = require("express");
var router = express.Router();

/* POST webhook. */
router.post("/", function (req, res) {
  const data = req.body;
  res.json({ message: "Webhook received!", data });
});

module.exports = router;

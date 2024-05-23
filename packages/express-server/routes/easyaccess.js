var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a easyaccess");
});

router.get("/2/", function (req, res, next) {
  res.send("respond with a easyaccess22");
});

router.get("/balance", function (req, res, next) {
  var address = req.query["address"];
});

module.exports = router;

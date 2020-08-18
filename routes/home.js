var express = require('express');
var router = express.Router();

// Home page content calls

/* GET home page. */
router.get('/desc', function(req, res, next) {
  res.send("");
});

module.exports = router;

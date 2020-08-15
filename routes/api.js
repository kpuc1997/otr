var express = require('express');
var router = express.Router();

// api calls for otr 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ apiTest: 'sucess' });
});

module.exports = router;

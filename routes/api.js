var express = require('express');
var router = express.Router();

const sqlite = require("sqlite3");
const dbHelper = require("../database/dbHelpers");

// api calls for otr 

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.json({ apiTest: 'sucess' });
// });

// GET any page text
router.get('/text/:name', function(req, res) {
  dbHelper.getText(req.params['name']).then((result) => (res.send(result)));
})

// GET all Spotify playlists
router.get('/playlists', function(req, res) {
  dbHelper.getPlaylists().then((results) => (res.send(results)));
})

module.exports = router;

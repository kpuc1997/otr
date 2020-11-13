var express = require('express');
var router = express.Router();

const dbHelper = require("../database/dbHelpers");

// api calls for otr 

// GET any page text
router.get('/text/:name', function(req, res) {
  dbHelper.getText(req.params['name']).then((result) => {res.send(result)}).catch((err) => (console.log(err)));
})

// Get all staff names and descriptions
router.get('/staff/allstaff', function(req, res){
  dbHelper.getStaff().then((results) => (res.send(results))).catch((err) => console.log(err));
})

// GET a single staff member's name and description
router.get('/staff/:number', function(req, res){
  dbHelper.getStaffMember(req.params['number']).then((results) => (res.send(results))).catch((err) => console.log(err));
})

// GET all Spotify playlists
router.get('/playlists', function(req, res) {
  dbHelper.getPlaylists().then((results) => (res.send(results)));
})

// Get a single Playlist
router.get('/playlist/:date', function(req, res) {
  dbHelper.getSinglePlaylist(req.params['date']).then((result) => {
    res.status(200).send(result)
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

// GET all Recordings
router.get('/recordings', function(req, res) {
  dbHelper.getRecordings().then((results) => (res.send(results)));
})

// Get a single Recording
router.get('/recording/:date', function(req, res) {
  dbHelper.getSingleRecording(req.params['date']).then((result) => {
    res.status(200).send(result)
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

// Update any page text
router.put('/text/:name', function(req, res) {
  dbHelper.updateText(req.params['name'], req.body.text).then((result) => {
    res.status(200).send('OK')
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

// Update a staff members information
router.put('/staff/:number', function(req, res) {
  dbHelper.updateStaffMember(req.params['number'], req.body.Name, req.body.Description).then((result) => {
    res.status(200).send('OK')
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

// Update a Playlist
router.put('/playlist/:date', function(req, res) {
  dbHelper.updatePlaylist(req.params['date'], req.body.link).then((result) => {
    res.status(200).send('OK')
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

// Update a Recording
router.put('/recording/:date', function(req, res) {
  dbHelper.updateRecording(req.params['date'], req.body.link).then((result) => {
    res.status(200).send('OK')
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

// Create a Playlist
router.post('/playlist/:date', function(req, res) {
  dbHelper.createPlaylist(req.params['date'], req.body.link).then((result) => {
    res.status(200).send('OK')
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

// Create a Recording
router.post('/recording/:date', function(req, res) {
  dbHelper.createRecording(req.params['date'], req.body.link).then((result) => {
    res.status(200).send('OK')
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

// Delete a Playlist
router.delete('/playlist/:date', function(req, res) {
  dbHelper.deletePlaylist(req.params['date']).then((result) => {
    res.status(200).send('OK')
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

// Delete a Recording
router.delete('/recording/:date', function(req, res) {
  dbHelper.deleteRecording(req.params['date']).then((result) => {
    res.status(200).send('OK')
  }).catch((err) => {
    console.log(err)
    res.status(500).send('Something went wrong.')
  });
})

module.exports = router;

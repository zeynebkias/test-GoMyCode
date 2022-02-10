const express = require('express');
const routerSong = express.Router();
const songsController = require('../controllers/songs.contoller');

// create song

routerSong.post('/create', songsController.createSong);

// get all songs

routerSong.get('/songs', songsController.getAllSongs);

//get single song

routerSong.get('/song/:id', songsController.getSong);

// update song
routerSong.put('/update/:id', songsController.updateSong);

// delete song 

routerSong.delete('/delete/:id', songsController.deleteSong);

module.exports = routerSong;
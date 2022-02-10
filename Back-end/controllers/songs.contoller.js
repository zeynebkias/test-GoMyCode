const Song = require("../models/songs.model")
const songsController = {};

songsController.createSong = async function (req, res) {
  const {singer,title, album} = req.body 
  const song = new Song({
    singer,
    title,
    album,
    

  });
  try {
   
    await Song.save();
   
    res.status(201).json({
      message: "song added successfully",
      song,
    });
  } catch (error) {
     res.status(500).json({
      message: "Error occured while adding song",
      error: error
    });
  }
};


songsController.getAllSongs = async function (req, res) {
  let songs;
  try {
    songs = await Song.find();
    res.send(songs);
  } catch (error) {
    res.status(500).send(error);
  }
};





songsController.getSong = async function (req, res) {
  let song;
  try {
    song = await Song.find({ id : req.params.id});
    res.send(song);
  } catch (error) {
    res.status(500).send(error);
  }
};


songsController.updateSong = async function (req, res) {
  let song;
  try {
    song = await Song.findByIdAndUpdate( req.params.id, {$set: req.body}, {new : true} );
    if (song){
    res.send(song);}
  } catch (error) {
    res.status(500).send(error);
  }
};


songsController.deleteSong = async function (req, res) {
  let song;
  try {
    song = await Song.findByIdAndDelete(req.params.id);
    if (song){
   res.send(song);}
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = songsController;
// const   cors = require("cors");
const express = require("express");

const {getAllMovies, getMoviesById} = require("./controllers")

const app = express();
// app.use(cors())
app.use(express.json());

//endpoints to get all movies
app.get('/movies', async(req, res) => {
  const movies = getAllMovies();
  res.json({movies})
})

//end point to get movie by id 
app.get('/movies/details/:id', async(req, res) => {
  let movie = getMoviesById(parseInt(req.params.id));
  res.json({movie})
})

module.exports = {app}
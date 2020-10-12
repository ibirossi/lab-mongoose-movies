const express = require('express');
const router  = express.Router();
const MoviesModel = require('../models/movies.model')


router.get('/', (req, res, next) => {
    MoviesModel.find()
    .then((movie) => {
        res.render('movies.hbs', {movie})
    })
  
});

router.get('/showdetails/:id', (req,res,next) => {
    let id = req.params.id; 
    MoviesModel.findById(id)
    .then((movies)=>{
        res.render('showmovies.hbs', {movies}) //do not use / in renders
    })
})

//movies/new
router.get('/new', (req,res) => {
    res.render('newmovies.hbs')
    
})

router.post('/new', (req,res) => {
    MoviesModel.create(req.body)
    .then(()=>{
        res.redirect('/movies')
    })
    
})

router.get("/remove/:id/delete", (req, res, next) => {
    let id = req.params.id; 
    MoviesModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies')
    })
  });

module.exports = router;
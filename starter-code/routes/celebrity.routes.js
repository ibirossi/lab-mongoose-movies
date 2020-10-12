const express = require('express');
const router  = express.Router();
const CelebrityModel = require('../models/celebrity.model')


router.get('/', (req, res, next) => {
    CelebrityModel.find()
    .then((celeb) => {
        res.render('celebrity.hbs', {celeb})
    })
  
});

router.get('/showdetail/:id', (req,res,next) => {
    let id = req.params.id; 
    CelebrityModel.findById(id)
    .then((celeb)=>{
        res.render('show.hbs', {celeb}) //do not use / in renders
    })
})


//celebrities/new
router.get('/new', (req,res) => {
    res.render('new.hbs')
    
})

router.post('/new', (req,res) => {
    CelebrityModel.create(req.body)
    .then(()=>{
        res.redirect('/celebrities')
    })
    
})

router.get("/remove/:id/delete", (req, res, next) => {
    let id = req.params.id; 
    CelebrityModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/celebrities')
    })
  });

  

module.exports = router;

const express = require('express');
const router  = express.Router();

const CelebrityModel = require('../models/celebrity.model')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

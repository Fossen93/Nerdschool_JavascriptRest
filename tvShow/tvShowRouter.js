const express = require('express');
const TvShow = require('./TvShow');
const tvShowRouter = express.Router();
const tvShowService = require('./tvShowService');



tvShowRouter.get('/', (req, res) => {
    res.json(tvShowService.getAll());
  });
  
  module.exports = tvShowRouter
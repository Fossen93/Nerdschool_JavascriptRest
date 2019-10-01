const express = require('express');

const tvShowRouter = express.Router();
const tvShowService = require('./tvShowService');

const app = express();

app.route('/tvshow/:tvShowId').get((req, res) => {
    const tvShowId = req.params.tvShowId;
    //res.send(`Fetching TV Show with id: ${tvShowId}`);
    res.json(tvShowService.getById(tvShowId))
});

tvShowRouter.get('/', (req, res) => {
    res.json(tvShowService.getAll());
});
  
  module.exports = tvShowRouter


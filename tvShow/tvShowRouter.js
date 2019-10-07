const express = require('express');

const TvShow = require('./TvShow');

const tvShowRouter = express.Router();
const tvShowService = require('./tvShowService');

tvShowRouter.get('/', (req, res) => {
    res.json(tvShowService.getAll());
});


tvShowRouter.route('/:tvShowId').get((req, res) =>{
    const tvShowId = req.params.tvShowId;
    res.send(tvShowService.getById(tvShowId));
})

tvShowRouter.post('/', (req, res) => {
    const name = req.body.name;
    const genre = req.body.genre;

    const newTvShow = tvShowService.createTvShow(name, genre);

    res.send(newTvShow)
});


module.exports = tvShowRouter


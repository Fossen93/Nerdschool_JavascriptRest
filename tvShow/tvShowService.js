const TvShow = require('./TvShow');
const createId = require('../utils/idUtil');

class TvShowService {
    constructor() {
      this.tvShows = [
          new TvShow(createId(), 'Mr.Robot', 'Drama'), 
          new TvShow(createId(), 'Black Mirror', 'Drama'),
          new TvShow(createId(), 'Silicon Valley', 'Comedy')
        ];
      
    }
    
    getAll() {
        return this.tvShows;
    }


    getById(id) {  
        return this.tvShows.find(tvshow => tvshow.id == id);
    }

    createTvShow(name, genre){
        const tvshow = new TvShow(createId(), name, genre);
        this.tvShows.push(tvshow);
        return tvshow;
    }

    remove(id) {
        this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== id);
        return this.tvShows
    }
}
module.exports = new TvShowService();
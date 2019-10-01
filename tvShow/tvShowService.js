const TvShow = require('./TvShow');

class TvShowService {
    constructor() {
      this.tvShows = [
          new TvShow(1, 'Mr.Robot', 'Drama'), 
          new TvShow(2, 'Black Mirror', 'Drama'),
          new TvShow(3, 'Silicon Valley', 'Comedy')
        ];
      
    }
    
    getAll() {
      return this.tvShows;
    }

    getById(id) {
        var tvshow;
        for(i=0; i < this.tvShows.length; i++){
            if (this.tvShows[i].id == id){
                tvshow = this.tvShows[i];
            }
        }
        return tvshow;
    }
}
module.exports = new TvShowService();

import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
    let query = Movie.find({});

    if(filter.search){

      // Todo: fix partial case insensitive search
      query = query.where({title: filter.search});
    }

    // Todo: add case insensitive search
    if(filter.genre){
      query = query.where({genre: filter.genre});
    }
    if(filter.year){
      query = query.where({year: Number(filter.year)});
    }

    return query;
  },
  getOne(movieId) {
    const query = Movie.findById(movieId);
    return query;
  },
  create(movieData) {
   const result = Movie.create({
    ...movieData,
    rating: Number(movieData.rating),
    year: Number(movieData.year),
  });
    
    
    return result;
  },
};

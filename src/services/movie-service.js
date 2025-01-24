import { v4 as uuid } from "uuid";
import movies from "../movies.js";
import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
    let query = Movie.where({})

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
    // Todo: add IDs
    const newId = uuid();
    movies.push({
      id: newId,
      ...movieData,
      rating: Number(movieData.rating),
    });
    return newId;
  },
};

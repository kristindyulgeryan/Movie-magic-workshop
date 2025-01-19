import { v4 as uuid } from "uuid";
import movies from "../movies.js";

export default {
  getAll() {
    return movies;
  },
  findOne(movieId) {
    const result = movies.find((movie) => movie.id === movieId);
    return result;
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

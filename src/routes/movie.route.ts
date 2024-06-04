import { Router } from "express";
import { searchMovies } from "../controllers/movie.controller";
import { validateMovieSearch } from "../validation/movies.validation";

const movieRoute = () => {
  const router = Router();

  router.post("/searchMovies", validateMovieSearch, searchMovies);

  return router;
};

export default movieRoute;

import { Response, Request } from "express";
import { Movie } from "../models/movie.model";
import { MovieSearchBody } from "../validation/movies.validation";
import createMovieAggPipeline from "../utils/createMoviesAggPipeline";

interface MovieSearchRequest extends Request {
  body: MovieSearchBody;
}

const searchMovies = async (req: MovieSearchRequest, res: Response) => {
  try {
    const agg = createMovieAggPipeline(req.body.queryVector);
    const aggregateResult = Movie.aggregate(agg);

    const movies = await aggregateResult.exec();

    res.json({ movies: movies });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { searchMovies };

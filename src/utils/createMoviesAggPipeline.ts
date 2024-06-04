import { PipelineStage } from "mongoose";
import {
  INDEX_NAME,
  MAX_YEAR_MOVIE_AGG,
  MOVIES_AGG_LIMIT,
  MOVIES_AGG_NUM_CANDIDATES,
  VECTOR_SEARCH_PATH,
} from "../consts/movies.consts";

const createMovieAggPipeline = (queryVector: number[]): PipelineStage[] => {
  const vectorAgg: PipelineStage.VectorSearch = {
    $vectorSearch: {
      index: INDEX_NAME,
      path: VECTOR_SEARCH_PATH,
      filter: {
        $and: [
          {
            year: {
              $lte: MAX_YEAR_MOVIE_AGG,
            },
          },
        ],
      },
      queryVector,
      numCandidates: MOVIES_AGG_NUM_CANDIDATES,
      limit: MOVIES_AGG_LIMIT,
    },
  };
  const agg: PipelineStage[] = [
    vectorAgg,
    {
      $project: {
        _id: 0,
        title: 1,
        plot: 1,
        score: {
          $meta: "vectorSearchScore",
        },
      },
    },
  ];
  return agg;
};

export default createMovieAggPipeline;

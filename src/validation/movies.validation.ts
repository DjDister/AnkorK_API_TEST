import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export interface MovieSearchBody {
  queryVector: number[];
  // If neeeded extend the payload with more fields
}

export const MovieSearchSchema = Joi.object<MovieSearchBody>({
  queryVector: Joi.array().items(Joi.number()).required(),
});

export const validateMovieSearch = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error, value: payload } = MovieSearchSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  req.body = payload;

  next();
};

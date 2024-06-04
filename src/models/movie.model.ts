import { Schema, Document, model, Model } from "mongoose";

interface MovieDocument extends Document {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  poster: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
    };
  };
  production: string;
  lastUpdated: Date;
  plot_embedding: number[];
}

const movieSchema = new Schema<MovieDocument>(
  {
    _id: Schema.Types.ObjectId,
    plot: String,
    genres: [String],
    runtime: { type: Schema.Types.Number, required: true },
    cast: [String],
    num_mflix_comments: { type: Schema.Types.Number, required: true },
    poster: String,
    fullplot: String,
    languages: [String],
    released: { type: Schema.Types.Date, required: true },
    directors: [String],
    writers: [String],
    awards: {
      wins: { type: Schema.Types.Number, required: true },
      nominations: { type: Schema.Types.Number, required: true },
      text: String,
    },
    lastupdated: { type: Schema.Types.Date, required: true },
    year: { type: Schema.Types.Number, required: true },
    imdb: {
      rating: { type: Schema.Types.Number, required: true },
      votes: { type: Schema.Types.Number, required: true },
      id: { type: Schema.Types.Number, required: true },
    },
    countries: [String],
    type: String,
    tomatoes: {
      viewer: {
        rating: { type: Schema.Types.Number, required: true },
        numReviews: { type: Schema.Types.Number, required: true },
      },
    },
    production: String,
    lastUpdated: { type: Schema.Types.Date, required: true },
    plot_embedding: [Schema.Types.Number],
  },
  { collection: "embedded_movies", timestamps: true }
);

const Movie: Model<MovieDocument> = model<MovieDocument>("Movie", movieSchema);

export { Movie, MovieDocument };

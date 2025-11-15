import React from "react";
import type { Movie, MovieDetails } from "./MovieContextProvider";

export interface MovieContextType {
  isLoading: boolean;
  movie: Movie[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  favourites: Movie[];
  toggleFavourite: (movie: Movie) => void;
  fetchMovieById: (id: string) => Promise<void>;
  selectedMovie: MovieDetails | null;
  selectedLoading: boolean;
}

const MovieContext = React.createContext<MovieContextType>({
  isLoading: false,
  movie: [],
  query: "",
  setQuery: () => {},
  favourites: [],
  toggleFavourite: () => {},
  fetchMovieById: async () => {},
  selectedMovie: null,
  selectedLoading: false,
});

export default MovieContext;

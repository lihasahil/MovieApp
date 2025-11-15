import React, { useEffect, useState, ReactNode } from "react";
import MovieContext from "./MovieContext";
import { toast } from "react-toastify";
import { MovieDetail } from "@/types/movie-detail";

// -------------------
// Interfaces
// -------------------
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieContextProviderProps {
  children: ReactNode;
}

const MovieContextProvider: React.FC<MovieContextProviderProps> = ({
  children,
}) => {
  const API_URL = `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }`;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(null);
  const [selectedLoading, setSelectedLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("titanic");

  // Load from localStorage on first render
  const [favourites, setFavourites] = useState<Movie[]>(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever favourites change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Toggle favourite functionality
  const toggleFavourite = (movieItem: Movie) => {
    const exists = favourites.some((fav) => fav.imdbID === movieItem.imdbID);

    const updated = exists
      ? favourites.filter((fav) => fav.imdbID !== movieItem.imdbID)
      : [...favourites, movieItem];

    setFavourites(updated);
    toast.success(exists ? "Removed from favourites" : "Added to favourites");
  };

  // Immediate search function (no debounce)
  const searchMovies = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setQuery(searchQuery);
    
    try {
      const res = await fetch(`${API_URL}&s=${searchQuery}`);
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data.Search);
      } else {
        setMovie([]);
        console.error("No movies found.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovie([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounced search for typing in search box
  useEffect(() => {
    if (!query) return;
    
    const timeout = setTimeout(() => {
      searchMovies(query);
    }, 800);

    return () => clearTimeout(timeout);
  }, [query]);

  // Fetch movie by IMDb ID
  const fetchMovieById = async (id: string) => {
    setSelectedLoading(true);
    try {
      const res = await fetch(`${API_URL}&i=${id}`);
      const data: MovieDetail = await res.json();

      if (data.Response === "True") {
        setSelectedMovie(data);
      }
    } catch (err) {
      console.error("Error fetching movie by ID:", err);
    } finally {
      setSelectedLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        isLoading,
        movie,
        query,
        setQuery,
        favourites,
        toggleFavourite,
        fetchMovieById,
        selectedMovie,
        selectedLoading,
        searchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
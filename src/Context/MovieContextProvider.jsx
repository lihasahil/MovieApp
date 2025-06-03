import React, { useEffect, useState } from "react";
import MovieContext from "./MovieContext";
import { toast } from "react-toastify";

const MovieContextProvider = ({ children }) => {
  const API_URL = `http://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedLoading, setSelectedLoading] = useState(false);
  const [query, setQuery] = useState("titanic");
  const [favourites, setFavourites] = useState(() => {
    // Load from localStorage on first render
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever favourites change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  //Add to favourites functionality which returns an array
  const toggleFavourite = (movie) => {
    const exists = favourites.find((fav) => fav.imdbID === movie.imdbID);

    const updated = exists
      ? favourites.filter((fav) => fav.imdbID !== movie.imdbID)
      : [...favourites, movie];

    setFavourites(updated);

    toast.success(exists ? "Removed from favourites" : "Added to favourites");
  };

  //API call for getting movies details by search
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        console.log("Error Obtained");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [query]);

  //API call for getting movies details by Id
  const fetchMovieById = async (id) => {
    setSelectedLoading(true);
    try {
      const res = await fetch(`${API_URL}&i=${id}`);
      //gets response saved to data
      const data = await res.json();
      if (data.Response === "True") {
        setSelectedMovie(data); //function sets data to selectedMovie
      }
    } catch (err) {
      console.error("Error fetching movie by ID:", err);
    } finally {
      setSelectedLoading(false);
    }
  };
  return (
    //helps pass data down components tree
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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

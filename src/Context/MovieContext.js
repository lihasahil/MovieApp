import React from "react";

const MovieContext = React.createContext({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export default MovieContext;

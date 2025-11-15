import React, { useContext } from "react";
import MovieContext from "../Context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favourites = () => {
  const { favourites } = useContext(MovieContext);

  return (
    <div className="p-4 mt-16">
      <h1 className="text-2xl font-bold mb-4">Your Favourites</h1>
      {/*checks if array is empty or not and gives result as stated*/}
      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favourites.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;

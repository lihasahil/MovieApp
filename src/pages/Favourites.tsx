import React, { useContext } from "react";
import MovieContext from "../Context/MovieContext";
import MovieCard from "../components/MovieCard";
import { Heart } from 'lucide-react';

const Favourites = () => {
  const { favourites } = useContext(MovieContext);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 pt-20">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 border-b border-amber-900/30">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-6 h-6 text-amber-500" />
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            Your Favourites
          </h1>
        </div>
        <p className="text-amber-200/60 text-sm ml-9">
          {favourites.length} movie{favourites.length !== 1 ? "s" : ""} saved
        </p>
      </div>

      {favourites.length === 0 ? (
        <div className="w-full flex flex-col justify-center items-center py-20">
          <Heart className="w-12 h-12 text-amber-500/30 mb-4" />
          <p className="text-amber-200/50 text-lg">No favourites yet. Start adding movies!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {favourites.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;

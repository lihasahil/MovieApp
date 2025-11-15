import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import MovieContext from "../Context/MovieContext";

const MovieCard = ({ imdbID, Title, Year, Poster }) => {
  const { favourites, toggleFavourite } = useContext(MovieContext);
  const isFavourite = favourites.some((fav) => fav.imdbID === imdbID);
  const navigate = useNavigate();

  return (
    <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <div
        onClick={() => navigate(`/movie/${imdbID}`)}
        className="cursor-pointer"
      >
        <img src={Poster} alt={Title} className="w-full h-64 object-fill" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{Title}</h2>
          <p className="text-sm text-gray-600">Release Date: {Year}</p>
        </div>
      </div>

      {/*Favourite Button*/}
      <button
        onClick={(e) => {
          e.stopPropagation(); // ✅ Prevent click from bubbling to parent
          toggleFavourite({ imdbID, Title, Year, Poster });
        }}
        className="absolute top-4 right-4 bg-white rounded-full p-1 shadow hover:bg-red-100 transition"
        title={isFavourite ? "Remove from favourites" : "Add to favourites"}
      >
        <Heart
          className={`w-5 h-5 ${
            isFavourite ? "text-red-500 fill-red-500" : "text-gray-400"
          }`}
        />
      </button>
    </div>
  );
};

export default MovieCard;

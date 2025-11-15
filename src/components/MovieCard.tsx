import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ExternalLink, Heart } from "lucide-react";
import MovieContext from "../Context/MovieContext";
import { Movie } from "../Context/MovieContextProvider";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface MovieCardProps extends Movie {}

const MovieCard: React.FC<MovieCardProps> = ({
  imdbID,
  Title,
  Year,
  Poster,
}) => {
  const { favourites, toggleFavourite } = useContext(MovieContext);
  const navigate = useNavigate();

  const isFavourite = favourites.some((fav) => fav.imdbID === imdbID);

  return (
    <Card className="relative max-w-sm rounded-2xl overflow-hidden shadow-lg bg-linear-to-b from-slate-900 via-slate-800 to-slate-950 hover:shadow-2xl hover:shadow-amber-500/20 transform hover:scale-105 transition duration-300 border border-amber-500/20 backdrop-blur-sm">
      <CardHeader>
        <div className="relative">
          <img
            src={Poster || "/placeholder.svg"}
            alt={Title}
            className="w-full h-64 object-fill"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {Title}
        </h2>
        <p className="text-sm text-amber-400/80">Release Date: {Year}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavourite({ imdbID, Title, Year, Poster, Type: "movie" });
          }}
          className="absolute cursor-pointer top-4 right-4 bg-slate-800/80 backdrop-blur-sm rounded-full p-2 shadow hover:bg-amber-500/30 transition border border-amber-500/30"
          title={isFavourite ? "Remove from favourites" : "Add to favourites"}
        >
          <Heart
            className={`w-5 h-5 ${
              isFavourite
                ? "text-amber-400 fill-amber-400"
                : "text-amber-400/50"
            }`}
          />
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate(`/movie/${imdbID}`)}
          className="cursor-pointer w-full bg-linear-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white border-0 font-semibold transition duration-300"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;

import { useContext } from "react";
import MovieContext from "../Context/MovieContext";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import { Film } from 'lucide-react';

const Home = () => {
  const { movie, isLoading } = useContext(MovieContext);
  return (
    <div className="min-h-screen -mt-10 bg-linear-to-b from-slate-950 to-slate-900">
      <Search />
      {/* Mapping details from movie to movie Card by checking whether array is empty or not*/}
      {isLoading ? (
        <div className="w-full flex flex-col justify-center items-center py-20">
          <div className="flex items-center gap-3 mb-8">
            <Film className="w-10 h-10 text-amber-500" />
            <span className="text-2xl font-bold bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              MovieMania
            </span>
          </div>
          {/* Simple moving line loader */}
          <div className="w-64 h-1 bg-linear-to-r from-slate-700 to-slate-800 rounded-full overflow-hidden relative shadow-lg">
            <div className="absolute h-full w-20 bg-linear-to-r from-amber-400 to-amber-600 rounded-full animate-[slide_1.5s_ease-in-out_infinite] shadow-lg shadow-amber-500/50"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {movie.length > 0 ? (
            movie.map((m) => <MovieCard key={m.imdbID} {...m} />)
          ) : (
            <p className="col-span-full text-center text-amber-200/70 w-full text-lg">
              No movies found. Try searching for something!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

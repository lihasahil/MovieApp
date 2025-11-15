import { useContext } from "react";
import MovieContext from "../Context/MovieContext";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movie, isLoading } = useContext(MovieContext);
  return (
    <>
      <Search />
      {/* Mapping details from movie to movie Card by checking whether array is empty or not*/}
      {isLoading ? (
        <div className="w-full flex flex-col justify-center items-center py-10">
          <div className="flex items-center gap-2">
            <img src="/movie.svg" alt="MM" className="size-20" />
            <span className="text-xl font-bold text-[#a0522d] font-['Momo_Signature']">
              MovieMania
            </span>
          </div>
          {/* Simple moving line loader */}
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden relative">
            <div className="absolute h-full w-20 bg-[#a0522d] rounded-full animate-[slide_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {movie.length > 0 ? (
            movie.map((m) => <MovieCard key={m.imdbID} {...m} />)
          ) : (
            <p className="col-span-full text-center text-gray-500 w-full">
              No movies found.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Home;

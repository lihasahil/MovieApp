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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {isLoading ? (
          <div className="w-full flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : movie.length > 0 ? (
          movie.map((m) => <MovieCard key={m.imdbID} {...m} />)
        ) : (
          <p className="text-center text-gray-500 w-full">No movies found.</p>
        )}
      </div>
    </>
  );
};

export default Home;

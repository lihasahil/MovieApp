import { useContext } from "react";
import MovieContext from "../Context/MovieContext";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const { query, setQuery } = useContext(MovieContext);
  return (
    <section className="w-full mt-20 px-4 py-12 sm:px-6 md:px-8 lg:px-16 bg-linear-to-b from-slate-800 to-slate-900 border-b border-amber-900/20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-8">
        Find Your Next Favorite
      </h2>

      <form
        action="#"
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center"
      >
        <div className="w-full max-w-xl relative">
          <SearchIcon className="absolute z-9 left-4 top-3.5 w-5 h-5 text-amber-500/60" />
          <input
            type="text"
            placeholder="Search movies by title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-700/50 backdrop-blur-sm border border-amber-900/50 rounded-xl text-amber-50 placeholder-amber-300/50 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent transition duration-300 hover:border-amber-900/70"
          />
        </div>
      </form>
    </section>
  );
};

export default Search;

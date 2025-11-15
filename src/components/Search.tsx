import React, { useContext } from "react";
import MovieContext from "../Context/MovieContext";

const Search = () => {
  const { query, setQuery } = useContext(MovieContext);
  return (
    <section className="w-full mt-16 px-4 py-6 sm:px-6 md:px-8 lg:px-16 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
        Search Your Movie Name
      </h2>

      <form
        action="#"
        onSubmit={(e) => e.preventDefault()} //prevent reloading
        className="flex justify-center"
      >
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          />
        </div>
      </form>
    </section>
  );
};

export default Search;

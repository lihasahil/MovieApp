import React, { useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import MovieContext from "../Context/MovieContext";

const MovieDetails = () => {
  const { id } = useParams();
  const { fetchMovieById, selectedMovie, selectedLoading } =
    useContext(MovieContext);

  useEffect(() => {
    fetchMovieById(id);
  }, [id]);

  if (selectedLoading || !selectedMovie) {
    return (
      <section className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
      </section>
    );
  }

  const movie = selectedMovie; //getting movie details from MovieContext and saved to movie

  return (
    <section className="flex justify-center items-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <figure className="md:w-1/2 w-full max-h-[500px] overflow-hidden">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-fill md:rounded-l-2xl"
          />
        </figure>
        <div className="p-6 md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {movie.Title}
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Released:</strong> {movie.Released}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>IMDB Rating:</strong> {movie.imdbRating} / 10
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Country:</strong> {movie.Country}
          </p>
          <NavLink
            to="/"
            className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;

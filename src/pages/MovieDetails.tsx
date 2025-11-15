import { useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import MovieContext from "../Context/MovieContext";
import { PageLoader } from "@/app/page-loader";

const MovieDetails = () => {
  const { id } = useParams();
  const { fetchMovieById, selectedMovie, selectedLoading } =
    useContext(MovieContext);

  useEffect(() => {
    fetchMovieById(id!);
  }, [id]);

  if (selectedLoading || !selectedMovie) {
    return <PageLoader />;
  }

  const movie = selectedMovie;

  return (
    <section className="flex justify-center items-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Poster */}
        <figure className="md:w-1/2 w-full max-h-[500px] overflow-hidden">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-fill md:rounded-l-2xl"
          />
        </figure>

        {/* Details */}
        <div className="p-6 md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {movie.Title} ({movie.Year})
          </h2>

          <p className="text-gray-600 mb-2">
            <strong>Released:</strong> {movie.Released}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Writer:</strong> {movie.Writer}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Country:</strong> {movie.Country}
          </p>

          <p className="text-gray-600 mb-4">
            <strong>Plot:</strong> {movie.Plot}
          </p>

          {/* Ratings */}
          <p className="text-gray-600 mb-2">
            <strong>IMDb Rating:</strong> {movie.imdbRating} / 10
          </p>

          {movie.Ratings?.length > 0 && (
            <div className="mb-4">
              <strong>Ratings:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {movie.Ratings.map((r, index) => (
                  <li key={index}>
                    {r.Source}: {r.Value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-gray-600 mb-2">
            <strong>Awards:</strong> {movie.Awards}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Box Office:</strong> {movie.BoxOffice}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Production:</strong> {movie.Production}
          </p>

          {movie.Website && movie.Website !== "N/A" && (
            <a
              href={movie.Website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline block mb-4"
            >
              Official Website
            </a>
          )}

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

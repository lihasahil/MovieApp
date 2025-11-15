import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "@/Context/MovieContext";
import { PageLoader } from "@/app/page-loader";
import { motion } from "framer-motion";
import { Star, Clapperboard, Users, Trophy, TrendingUp } from "lucide-react";

const MovieDetails = () => {
  const { id } = useParams();
  const { fetchMovieById, selectedMovie, selectedLoading } =
    useContext(MovieContext);

  useEffect(() => {
    fetchMovieById(id!);
  }, [id]);

  if (selectedLoading || !selectedMovie) {
    return (
      <div className="w-full flex h-screen flex-col justify-center items-center py-10 bg-linear-to-b from-slate-950 to-slate-900">
        <div className="flex items-center gap-2">
          <img src="/movie.svg" alt="MM" className="size-20" />
          <span className="text-xl font-bold text-amber-400 font-['Momo_Signature']">
            MovieMania
          </span>
        </div>
        {/* Modern animated loader */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden relative mt-8">
          <div className="absolute h-full w-20 bg-linear-to-r from-amber-400 to-orange-500 rounded-full animate-[slide_1.5s_ease-in-out_infinite] shadow-lg shadow-amber-400/50"></div>
        </div>
      </div>
    );
  }

  const movie = selectedMovie;

  return (
    <div className="min-h-screen mt-15 w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] min-h-[500px] overflow-hidden"
      >
        {/* Backdrop Image */}
        <div className="absolute inset-0">
          <img
            src={movie.Poster || "/placeholder.svg"}
            alt={movie.Title}
            className="w-full h-full object-cover object-center"
          />
          {/* Advanced gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-slate-900/30 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/40 via-transparent to-transparent" />

          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end px-8 py-16 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-black tracking-tighter text-white drop-shadow-2xl max-w-4xl leading-tight text-balance">
              {movie.Title}
            </h1>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Rating Badge */}
              <div className="flex items-center gap-2 bg-linear-to-r from-amber-400/20 to-orange-500/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-amber-400/40 hover:border-amber-400/70 transition-colors">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-amber-300 text-lg">
                  {movie.imdbRating}/10
                </span>
              </div>

              {/* Runtime */}
              <div className="flex items-center gap-2 text-slate-300 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                <Clapperboard className="w-4 h-4" />
                <span className="text-sm font-medium">{movie.Runtime}</span>
              </div>

              {/* Genre */}
              <div className="flex items-center gap-2 text-slate-300 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">{movie.Genre}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-8 py-20 space-y-24">
        {/* PLOT SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12"
        >
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-4xl font-black text-white mb-6">Plot</h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                {movie.Plot}
              </p>
            </motion.div>
          </div>

          {/* Release Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-amber-400/10 transition-shadow duration-300 h-fit"
          >
            <h3 className="font-bold text-white text-lg mb-8 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              Release Info
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                  Released
                </p>
                <p className="text-white font-semibold text-lg">
                  {movie.Released}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                  Country
                </p>
                <p className="text-white font-semibold text-lg">
                  {movie.Country}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* DETAILS SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black text-white mb-12">
            Credits & Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {[
                { label: "Director", value: movie.Director },
                { label: "Writer", value: movie.Writer },
                { label: "Production", value: movie.Production },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <p className="text-xs font-black text-amber-400 uppercase tracking-widest mb-3">
                    {item.label}
                  </p>
                  <p className="text-slate-200 text-lg font-medium group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {[
                { label: "Cast", value: movie.Actors },
                { label: "Awards", value: movie.Awards },
                { label: "Box Office", value: movie.BoxOffice },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <p className="text-xs font-black text-amber-400 uppercase tracking-widest mb-3">
                    {item.label}
                  </p>
                  <p className="text-slate-200 text-lg font-medium group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* RATINGS SECTION */}
        {movie.Ratings?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-white mb-12">
              Critical Ratings
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {movie.Ratings.map((rating, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-amber-400/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient accent on hover */}
                  <div className="absolute inset-0 bg-linear-to-r from-amber-400/0 via-amber-400/0 to-orange-500/0 group-hover:from-amber-400/10 group-hover:via-orange-500/10 group-hover:to-transparent transition-all duration-300" />

                  <div className="relative z-10">
                    <p className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                      {rating.Source}
                    </p>
                    <p className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                      {rating.Value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default MovieDetails;

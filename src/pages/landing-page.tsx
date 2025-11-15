import { Button } from "@/components/ui/button";
import MovieContext from "@/Context/MovieContext";
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const navigate = useNavigate();
  const { setQuery, searchMovies } = useContext(MovieContext);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      setQuery(searchQuery);
      searchMovies(searchQuery);
      navigate("/home");
    }
  };

  return (
    <main
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden overflow-y-hidden"
      style={{
        backgroundImage: 'url("/bg-movie.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
        <div className="text-center space-y-12">
          {/* Logo/Title */}
          <div className="space-y-6">
            <div className="flex justify-center mb-4">
              <img src="/movie.svg" alt="MM" className="size-30" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white drop-shadow-2xl tracking-tight">
              MovieMania
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-lg font-medium">
              Find Your Next Favorite Film
            </p>
          </div>

          <form onSubmit={handleSearch} className="w-full mt-12">
            <div className="relative">
              <div
                className={`relative bg-white/10 backdrop-blur-xl rounded-3xl px-2 py-2 md:py-3 flex items-center gap-2 shadow-lg border transition-all duration-300 ${
                  isFocused
                    ? "border-red-400/60 bg-white/15"
                    : "border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/12"
                }`}
              >
                {/* Movie Icon */}
                <div className="shrink-0 pl-4">
                  <img src="/movie.svg" alt="MM" className="size-5" />
                </div>

                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="flex-1 bg-transparent min-w-0 text-white placeholder-white/40 focus:outline-none text-lg font-medium px-2 transition-all duration-300"
                />

                <Button
                  type="submit"
                  className="shrink-0 bg-red-500 cursor-pointer text-white px-8 py-3 mr-3 rounded-md font-bold hover:bg-red-700 transition-all duration-300 text-sm md:text-base"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Quick suggestions */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Titanic", "Avengers", "Star Wars", "Avatar"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery(tag)}
                  className="px-5 py-2 cursor-pointer rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white text-sm font-medium transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </form>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 pt-10 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                50K+
              </div>
              <div className="text-xs md:text-sm text-gray-200 mt-2 font-medium">
                Movies
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                10M+
              </div>
              <div className="text-xs md:text-sm text-gray-200 mt-2 font-medium">
                Ratings
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                100%
              </div>
              <div className="text-xs md:text-sm text-gray-200 mt-2 font-medium">
                Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

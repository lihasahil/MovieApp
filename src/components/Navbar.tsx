import MovieContext from "@/Context/MovieContext";
import { useContext } from "react";
import { Film } from "lucide-react";

const Navbar = () => {
  const { favourites } = useContext(MovieContext);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md border-b border-amber-900/30 shadow-2xl px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="/movie.svg" alt="MM" className="size-10" />
        <span className="text-lg font-bold bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-momo">
          MovieMania
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <a
          href="/"
          className="text-amber-100 hover:text-amber-400 font-medium transition-colors duration-300"
        >
          Home
        </a>
        <div className="relative">
          <a
            href="/favourites"
            className="text-amber-100 hover:text-amber-400 font-medium transition-colors duration-300"
          >
            Favourites
          </a>
          {favourites.length > 0 && (
            <span className="absolute -top-3 -right-4 bg-linear-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
              {favourites.length > 99 ? "99+" : favourites.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

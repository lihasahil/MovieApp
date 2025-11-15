import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        <a href="/">MoviesApp</a>
      </div>
      <div className="flex items-center space-x-6">
        <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </a>
        <div className="relative">
          <a
            href="/favourites"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Favourites
          </a>

          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            !
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

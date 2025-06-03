import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieContextProvider from "./Context/MovieContextProvider.jsx";
import Navbar from "./components/Navbar.jsx";
import Favorites from "./pages/Favourites.jsx";
import { ToastContainer } from "react-toastify";
import MovieDetails from "./pages/MovieDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favourites",
    element: <Favorites />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieContextProvider>
      <Navbar />
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </MovieContextProvider>
  </React.StrictMode>
);

import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import App from "../index";

import { ErrorFallback } from "../error-fallback";
import { NotFound } from "../not-found";
import { withSuspense } from "@/components/layouts/with-suspense";

const LandingPage = lazy(() => import("../../pages/landing-page"));
const Home = lazy(() => import("../../pages/Home"));
const Favourites = lazy(() => import("../../pages/Favourites"));
const MovieDetail = lazy(() => import("../../pages/MovieDetails"));

export const router = createBrowserRouter([
  {
    // Root route
    Component: App,
    ErrorBoundary: ErrorFallback,

    children: [
      // Site routes ( Public / Unprotected )
      { path: "/", element: withSuspense(LandingPage) },
      { path: "/home", element: withSuspense(Home) },
      { path: "/favourite", element: withSuspense(Favourites) },
      { path: "/movie/:id", element: withSuspense(MovieDetail) },

      // Catch-all route for unmatched routes
      { path: "*", element: <NotFound className="min-h-screen" /> },
    ],
  },
]);

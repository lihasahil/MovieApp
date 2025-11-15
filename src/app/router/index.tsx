import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import App from "../index";

import { ErrorFallback } from "../error-fallback";
import { NotFound } from "../not-found";
import { withSuspense } from "@/components/layouts/with-suspense";

const Home = lazy(() => import("../../pages/Home"));

export const router = createBrowserRouter([
  {
    // Root route
    Component: App,
    ErrorBoundary: ErrorFallback,

    children: [
      // Site routes ( Public / Unprotected )
      { path: "/", element: withSuspense(Home) },

      // Catch-all route for unmatched routes
      { path: "*", element: <NotFound className="min-h-screen" /> },
    ],
  },
]);

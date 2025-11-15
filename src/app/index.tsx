import { Outlet } from "react-router";

import MovieContextProvider from "src/Context/MovieContextProvider";

/**
 * Main App Component
 * Wraps the application with necessary providers for state management, authentication, theming and internationalization.
 * It includes the ReduxProvider, AuthProvider, TanstackProvider, ThemeProvider, and LanguageProvider.
 *
 * - `Outlet` is used to render the child routes defined in the router configuration.
 * - `NetworkStatus` component is included to monitor and display network connectivity status.
 * - `Toaster` is used to display notifications and messages throughout the application.
 * - `ScrollToTop` component automatically scrolls to the top of the page on route changes.
 */
export default function App() {
  return (
    <MovieContextProvider>
      <Outlet />;
    </MovieContextProvider>
  );
}

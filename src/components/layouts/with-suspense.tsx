import { PageLoader } from "@/app/page-loader";
import { type JSX, Suspense } from "react";

/**
 * Higher-order component that wraps a component with React's Suspense.
 * It allows for lazy loading of components with a fallback UI.
 *
 * @param {React.LazyExoticComponent<() => JSX.Element>} Component - The component to be wrapped.
 */
export const withSuspense = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

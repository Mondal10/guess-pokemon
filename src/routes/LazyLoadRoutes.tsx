import { lazy, Suspense } from "react";

export function lazyLoadRoutes(componentName: string) {
  const LazyElement = lazy(() => import(`../pages/${componentName}.tsx`));

  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  );
}

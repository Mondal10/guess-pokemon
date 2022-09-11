import { useRoutes } from "react-router-dom";
import { lazyLoadRoutes } from "./LazyLoadRoutes";

export function RouterElement() {
  const routes = [
    {
      path: "/",
      name: "Landing",
      element: lazyLoadRoutes("Landing"),
    },
    {
      path: "game",
      name: "Game",
      element: lazyLoadRoutes("Game"),
    },
    {
      path: "setting",
      name: "Setting",
      element: lazyLoadRoutes("Setting"),
    },
  ];

  return useRoutes(routes);
}

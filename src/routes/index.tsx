import { useRoutes } from "react-router-dom";
import { ROUTE_PATH } from "./enums";
import { lazyLoadRoutes } from "./LazyLoadRoutes";

export function RouterElement() {
  const routes = [
    {
      path: ROUTE_PATH.HOME,
      name: "Landing",
      element: lazyLoadRoutes("Landing"),
    },
    {
      path: ROUTE_PATH.GAME,
      name: "Game",
      element: lazyLoadRoutes("Game"),
    },
    {
      path: ROUTE_PATH.SETTING,
      name: "Setting",
      element: lazyLoadRoutes("Setting"),
    },
  ];

  return useRoutes(routes);
}

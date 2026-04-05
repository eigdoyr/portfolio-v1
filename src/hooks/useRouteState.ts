import { useLocation } from "react-router-dom";
import type { RouteState } from "../types";

export const useRouteState = (): RouteState => {
  const { pathname } = useLocation();
  return {
    isHome: pathname === "/",
    isProjects: pathname === "/projects",
    isWorkDetail: pathname.startsWith("/work/"),
  };
};

import Home from "../pages/Home";
import Map from "../pages/Map";
import VirtualTourism3D from "../pages/VR360";
import RouterPath from "./RouterPath";
import { RouteConfig } from "./types";

export const routesConfig: RouteConfig[] = [
  {
    path: RouterPath.VIRTUAL_TOURISM_3D,
    component: VirtualTourism3D,
  },
  {
    path: RouterPath.MAP,
    component: Map,
  },
  {
    path: RouterPath.HOME,
    component: Home,
  },
];

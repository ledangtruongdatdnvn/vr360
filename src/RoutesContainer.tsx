import { Route, Routes } from "react-router-dom";
import { routesConfig } from "./router/router.config";
import { RouteConfig } from "./router/types";

const RenderRoutes = () => {
  return routesConfig.map((r: RouteConfig, index) => {
    return <Route key={index} path={r.path} element={<r.component />} />;
  });
};

const RoutesContainer = () => {
  return <Routes>{RenderRoutes()}</Routes>;
};

export default RoutesContainer;

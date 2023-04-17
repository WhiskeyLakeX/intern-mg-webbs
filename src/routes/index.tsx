import RouteList from "./RouteList";
import routes, { IRoute } from "./RouteList";
import { createBrowserRouter } from "react-router-dom";
import LayoutProvider from "../module/utils/LayoutProvider";

const loopLayout = (children: IRoute[]): void => {
  children.forEach((child, index) => {
    if (child.isSideBar === true && child.hasOwnProperty("element")) {
      child["element"] = <LayoutProvider child={child.element} key={index} />;
    }
    if (child.hasOwnProperty("children") && child.children) {
      loopLayout(child.children);
    }
  });
};
loopLayout(routes);

const router = createBrowserRouter(RouteList);

export default router;

import { TRoute, TUserPath } from "../types";
import { navConstant } from "./userRole";

export const routeGenerator = (items: TUserPath[], nav: string) => {
  let navItems = items;
  if (nav == navConstant.removeDashboard) {
    navItems = items.filter((item) => item.name != "DASHBOARD");
  }

  const routes = navItems.reduce((acc: TRoute[], item, ind) => {
    if (item.path && item.element) {
      if (ind == 0) {
        acc.push({
          index: true,
          element: item.element,
        });
      }
      if (item.path) {
        acc.push({
          path: item.path,
          element: item.element,
        });
      }
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};

import { TRoute, TUserPath } from "../types";

export const routeGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item, ind) => {
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

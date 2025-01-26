import { MenuItem, TUserPath } from "../types";
import { NavLink } from "react-router-dom";

export const navbarGenerator = (items: TUserPath[]) => {
  const sidebarItems = items.reduce((acc: MenuItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>,
        icon: "",
      });
    }

    if (item.children) {
      acc.push({
        key: item.name as string,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: <NavLink to={`/${child.path}`}>{child.name}</NavLink>,
              icon: "",
            };
          }
        }) as MenuItem[],
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};

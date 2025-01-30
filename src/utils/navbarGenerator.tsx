import { Badge } from "antd";
import { MenuItem, TUserPath } from "../types";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const navbarGenerator = (
  items: TUserPath[],
  path = "" as string,
  counter = 0 as number
) => {
  const sidebarItems = items.reduce((acc: MenuItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label:
          path.length > 0 ? (
            <NavLink to={`/${path}/${item.path}`}>{item.name}</NavLink>
          ) : (
            <NavLink to={`/${item.path}`}>
              {item.name == "CART" ? (
                <Badge count={counter}>
                  <ShoppingCartOutlined
                    style={{ fontSize: "26px", color: "#000" }}
                  />
                </Badge>
              ) : (
                item.name
              )}
            </NavLink>
          ),
        icon: item?.icon,
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};

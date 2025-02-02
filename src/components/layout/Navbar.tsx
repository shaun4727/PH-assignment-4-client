import React from "react";

import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import "../../assets/navbar.css";
import logo from "../../assets/images/logo.png";
import { navbarGenerator } from "../../utils/navbarGenerator";
import { paths } from "../../routes/routes";
import { TNavItem } from "../../types";
import { useAppSelector } from "../../redux/hook";
import { useLocation } from "react-router-dom";
const { Header } = Layout;

const removeNavItem = (nav: string, navArr: TNavItem[]) => {
  const index = navArr.findIndex((item) => item.name == nav);

  if (index > -1) {
    navArr.splice(index, 1);
  }
};

const menuItems: Record<string, string> = {
  "/home": "HOME",
  "/about": "ABOUT US",
  "/all-products": "ALL PRODUCTS",
  "/dashboard": "DASHBOARD",
  "/login": "LOGIN",
  "/view-cart": "CART",
  "/register": "SIGN UP",
  "/order/verify": "ORDER VERIFY",
  "/product/view-detail": "PRODUCT DETAIL",
  "/checkout": "CHECKOUT",
};

const Navbar: React.FC = () => {
  const NavArr = JSON.parse(JSON.stringify(paths));
  const token = useAppSelector((state) => state.auth.token);
  const cartItems = useAppSelector((state) => state.cart.books);
  const { pathname } = useLocation();

  if (menuItems[pathname]) {
    document.title = menuItems[pathname];
  }

  if (token) {
    removeNavItem("LOGIN", NavArr);
  } else {
    removeNavItem("DASHBOARD", NavArr);
  }
  const navItems: MenuProps["items"] = navbarGenerator(
    NavArr,
    "",
    cartItems.length
  );

  const onClick: MenuProps["onClick"] = (e) => {
    document.title = e.key;
  };

  return (
    <>
      <Header
        className="nav-header"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={logo} />
        <Menu
          mode="horizontal"
          onClick={onClick}
          defaultSelectedKeys={[document.title]}
          items={navItems}
          style={{ flex: 1, minWidth: 0, justifyContent: "end" }}
        />
      </Header>
    </>
  );
};

export default Navbar;

import React, { useEffect } from "react";
// import React, { useState, useEffect } from "react";

import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import "../../assets/navbar.css";
import logo from "../../assets/images/logo.png";
import { navbarGenerator } from "../../utils/navbarGenerator";
import { paths } from "../../routes/routes";
import { TNavItem } from "../../types";
import { useAppSelector } from "../../redux/hook";

const { Header } = Layout;

const removeNavItem = (nav: string, navArr: TNavItem[]) => {
  const index = navArr.findIndex((item) => item.name == nav);

  if (index > -1) {
    navArr.splice(index, 1);
  }
};

const Navbar: React.FC = () => {
  const NavArr = JSON.parse(JSON.stringify(paths));
  // const [current, setCurrent] = useState("HOME");
  const token = useAppSelector((state) => state.auth.token);
  const cartItems = useAppSelector((state) => state.cart.books);

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

  useEffect(() => {
    document.title = "Home"; // Set the title here
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    // setCurrent(e.key);
    console.log(e);
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
          defaultSelectedKeys={["2"]}
          items={navItems}
          style={{ flex: 1, minWidth: 0, justifyContent: "end" }}
        />
      </Header>
    </>
  );
};

export default Navbar;

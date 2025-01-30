import React, { useState, useEffect } from "react";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import "../../assets/navbar.css";
import logo from "../../assets/images/logo.png";
import { navbarGenerator } from "../../utils/navbarGenerator";
import { paths } from "../../routes/routes";
import { TNavItem } from "../../types";
import { useAppSelector } from "../../redux/hook";

const removeNavItem = (nav: string, navArr: TNavItem[]) => {
  const index = navArr.findIndex((item) => item.name == nav);

  if (index > -1) {
    navArr.splice(index, 1);
  }
};

const Navbar: React.FC = () => {
  const NavArr = JSON.parse(JSON.stringify(paths));
  const [current, setCurrent] = useState("HOME");
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
    setCurrent(e.key);
  };

  return (
    <>
      <div className="nav-container">
        <div>
          <img src={logo} />
        </div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={navItems}
          className="horizontal-menu navigation-bar"
          style={{ display: "flex", justifyContent: "end" }}
        />
      </div>
    </>
  );
};

export default Navbar;

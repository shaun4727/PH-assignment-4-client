import React, { useState, useEffect } from "react";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import "../../assets/navbar.css";
import logo from "../../assets/images/logo.png";
import { navbarGenerator } from "../../utils/navbarGenerator";
import { paths } from "../../routes/routes";
import { MenuItem } from "../../types";

// type MenuItem = Required<MenuProps>["items"][number];

// const items: MenuItem[] = [
//   {
//     label: "HOME",
//     key: "home",
//     icon: "",
//   },
//   {
//     label: "ABOUT US",
//     key: "about",
//     icon: "",
//   },
//   {
//     label: "ALL PRODUCTS",
//     key: "all-products",
//     icon: "",
//   },
// ];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const navItems: MenuItem[] = navbarGenerator(paths);

  useEffect(() => {
    document.title = "Home"; // Set the title here
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
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

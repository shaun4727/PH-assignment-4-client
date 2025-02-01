import React from "react";

import type { MenuProps } from "antd";
import { Col, Layout, Menu, Row } from "antd";
import "../assets/css/dashboard/dashboard.css";
import { Outlet } from "react-router-dom";
import { navbarGenerator } from "../utils/navbarGenerator";
import { userPaths, adminPaths } from "../routes/routes";
import Navbar from "../components/layout/Navbar";
import { useAppSelector } from "../redux/hook";
import { USER_ROLE } from "../utils/userRole";
import { TUser } from "../types";

const getSidebarItems = (user: TUser) => {
  if (user.role == USER_ROLE.user) {
    const navItems: MenuProps["items"] = navbarGenerator(
      userPaths,
      "dashboard"
    );
    return { navItems, defaultKey: "Order History" };
  }
  const navItems: MenuProps["items"] = navbarGenerator(adminPaths, "dashboard");
  return { navItems, defaultKey: "View Orders" };
};

const DashboardPage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const returedObj = getSidebarItems(user as TUser);
  const sidebarItems = returedObj.navItems;
  const defaultKey = returedObj.defaultKey;
  return (
    <>
      <Layout className="dashboard-layout root-layout">
        <Navbar />

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8} lg={4} xl={4} className="gutter-row">
            {" "}
            <Menu
              mode="inline"
              defaultSelectedKeys={[defaultKey]}
              style={{ height: "100%", borderRight: 0 }}
              items={sidebarItems}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={20}
            xl={20}
            className="gutter-row dashboard-order-history"
          >
            <Outlet />
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default DashboardPage;

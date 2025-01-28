import React from "react";

import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import "../assets/css/dashboard/dashboard.css";
import { Outlet } from "react-router-dom";
import { navbarGenerator } from "../utils/navbarGenerator";
import { userPaths } from "../routes/routes";
import Navbar from "../components/layout/Navbar";

const { Content, Sider } = Layout;

const DashboardPage: React.FC = () => {
  const navItems: MenuProps["items"] = navbarGenerator(userPaths, "dashboard");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <Layout className="dashboard-layout">
          <Layout>
            <Sider width={200} style={{ background: colorBgContainer }}>
              <Menu
                mode="inline"
                style={{ height: "100%", borderRight: 0 }}
                items={navItems}
              />
            </Sider>
            <Layout
              style={{ padding: "0 24px 24px" }}
              className="dashboard-order-history"
            >
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default DashboardPage;

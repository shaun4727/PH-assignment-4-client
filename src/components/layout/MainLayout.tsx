import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import FooterPage from "../../components/footer";
import { Layout } from "antd";
import "../../assets/css/rootLayout.css";

const MainLayout = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/dashboard"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <Layout className="root-layout" style={{ background: "#fff" }}>
      <Navbar />
      <Outlet />
      {!shouldHideFooter && <FooterPage />}
    </Layout>
  );
};

export default MainLayout;

import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/footer";

const MainLayout = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/dashboard"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div>
      <Navbar />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

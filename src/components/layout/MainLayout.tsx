import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

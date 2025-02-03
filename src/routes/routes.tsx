// import App from "../App";
// import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
// import ProductDetail from "../pages/ProductDetail";
import CartView from "../pages/CartPage";
// import CheckoutPage from "../pages/CheckoutPage";
// import DashboardPage from "../pages/Dashboard";
import OrderHistory from "../components/dashboard/orderHistory";
import { BarsOutlined, LogoutOutlined } from "@ant-design/icons";
import LoginPage from "../pages/Login";
// import ProtectedRoute from "../components/layout/ProtectedRoute";

// import SignUpPage from "../pages/SignUp";
// import ScrollToTop from "../components/layout/ScrollToTop";
// import VerifyOrder from "../pages/VerifyOrder";
import LogoutPage from "../pages/Logout";
import MangeProducts from "../components/dashboard/ManageProducts";

import GetUsers from "../components/dashboard/GetUsers";

import UpdatePasswordCom from "../components/dashboard/UpdatePassword";
import CarouselImageCom from "../components/dashboard/CarouselImageUpload";

export const userPaths = [
  {
    name: "Order History",
    path: "order-history",
    icon: <BarsOutlined />,
    element: <OrderHistory />,
  },
  {
    name: "Update Password",
    path: "update",
    icon: <BarsOutlined />,
    element: <UpdatePasswordCom />,
  },
  {
    name: "Logout",
    path: "logout",
    icon: <LogoutOutlined />,
    element: <LogoutPage />,
  },
];

export const adminPaths = [
  {
    name: "View Orders",
    path: "order-history",
    icon: <BarsOutlined />,
    element: <OrderHistory />,
  },
  {
    name: "Products",
    path: "manage-products",
    icon: <BarsOutlined />,
    element: <MangeProducts />,
  },
  {
    name: "Users",
    path: "get-users",
    icon: <BarsOutlined />,
    element: <GetUsers />,
  },
  {
    name: "Carousel Image",
    path: "carousel-image",
    icon: <BarsOutlined />,
    element: <CarouselImageCom />,
  },

  {
    name: "Logout",
    path: "logout",
    icon: <LogoutOutlined />,
    element: <LogoutPage />,
  },
];

export const paths = [
  {
    index: true,
    name: "HOME",
    path: "home",
    element: <Home />,
  },
  {
    name: "ABOUT US",
    path: "about",
    element: <About />,
  },
  {
    name: "ALL PRODUCTS",
    path: "all-products",
    element: <AllProducts />,
  },
  {
    name: "DASHBOARD",
    path: "dashboard",
  },
  {
    name: "LOGIN",
    path: "login",
    element: <LoginPage />,
  },
  {
    name: "CART",
    path: "view-cart",
    element: <CartView />,
  },
];

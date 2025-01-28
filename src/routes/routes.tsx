import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import { routeGenerator } from "../utils/routesGenerator";
import ProductDetail from "../pages/ProductDetail";
import CartView from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import DashboardPage from "../pages/Dashboard";
import OrderHistory from "../components/dashboard/orderHistory";
import { BarsOutlined } from "@ant-design/icons";

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
    element: <DashboardPage />,
  },
];

export const userPaths = [
  {
    name: "Order History",
    path: "order-history",
    icon: <BarsOutlined />,
    element: <OrderHistory />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(paths),
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: routeGenerator(userPaths),
  },

  {
    path: "/product/view-detail",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductDetail />,
      },
      {
        path: "view-cart",
        element: <CartView />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

export default router;

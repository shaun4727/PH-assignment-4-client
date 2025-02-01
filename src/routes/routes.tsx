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
import { BarsOutlined, LogoutOutlined } from "@ant-design/icons";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../components/layout/ProtectedRoute";

import SignUpPage from "../pages/SignUp";
import ScrollToTop from "../components/layout/ScrollToTop";
import VerifyOrder from "../pages/VerifyOrder";
import LogoutPage from "../pages/Logout";
import MangeProducts from "../components/dashboard/ManageProducts";
import { store } from "../redux/store"; // Import the store directly
import { RootState } from "../redux/store"; // Import RootState type for correct typings
import { USER_ROLE } from "../utils/userRole";

export const fetchUserData = (): RootState => {
  const state: RootState = store.getState(); // Typed state
  const user = state;

  console.log("User from state:", user);

  // Perform operations based on the state
  return user;
};

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
    element: (
      <ProtectedRoute>
        <DashboardPage />,
      </ProtectedRoute>
    ),
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

export const userPaths = [
  {
    name: "Order History",
    path: "order-history",
    icon: <BarsOutlined />,
    element: <OrderHistory />,
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
    name: "Logout",
    path: "logout",
    icon: <LogoutOutlined />,
    element: <LogoutPage />,
  },
];

const getRouteItems = () => {
  const user = fetchUserData().auth.user;
  if (user && user.role == USER_ROLE.user) {
    return routeGenerator(userPaths);
  }
  return routeGenerator(adminPaths);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(paths),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />,
      </ProtectedRoute>
    ),
    children: getRouteItems(),
  },
  {
    path: "/register",
    element: <App />,
    children: [
      {
        index: true,
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/order/verify",
    element: <App />,
    children: [
      {
        index: true,
        element: <VerifyOrder />,
      },
    ],
  },

  {
    path: "/product/view-detail",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <ScrollToTop>
            <ProductDetail />
          </ScrollToTop>
        ),
      },

      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { adminPaths, paths, userPaths } from "../../routes/routes";
import App from "../../App";
import { routeGenerator } from "../../utils/routesGenerator";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "../../pages/Dashboard";
import SignUpPage from "../../pages/SignUp";
import VerifyOrder from "../../pages/VerifyOrder";
import ScrollToTop from "./ScrollToTop";
import ProductDetail from "../../pages/ProductDetail";
import CheckoutPage from "../../pages/CheckoutPage";
import { useAppSelector } from "../../redux/hook";
import { USER_ROLE } from "../../utils/userRole";

const DynamicRouter = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dashboarRouterGenerator = () => {
    if (user && user.role == USER_ROLE.user) {
      return routeGenerator(userPaths);
    }

    return routeGenerator(adminPaths);
  };

  const [router, setRouter] = useState(
    createBrowserRouter([
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
        children: dashboarRouterGenerator(),
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
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
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
    ])
  );

  useEffect(() => {
    // const dashboardRoutes = getDashboardRouteList() || [];
    const routers = createBrowserRouter([
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
        children: dashboarRouterGenerator(),
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
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
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
    setRouter(routers);
  }, [user]);

  return <RouterProvider router={router} />;
};

export default DynamicRouter;

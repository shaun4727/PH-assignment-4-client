import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import { routeGenerator } from "../utils/routesGenerator";

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
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(paths),
  },
]);
console.log("router", routeGenerator(paths));
export default router;

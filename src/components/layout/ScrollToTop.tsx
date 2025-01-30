import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
};

const ScrollToTop = ({ children }: TProtectedRoute) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollToTop;

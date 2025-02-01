import React, { useEffect } from "react";

import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";

const LogoutPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return <div className="login-page"></div>;
};

export default LogoutPage;

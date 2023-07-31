import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  canActivate: boolean;
  redirectPath?: string;
}

const PrivateRoute = ({ canActivate, redirectPath = "/home" }: Props) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
